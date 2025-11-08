// API Base URL
const API_BASE = '/api';

// Global state
let currentView = 'clients';
let currentClientId = null;
let currentProjectId = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    showClients();
});

// API Functions
async function apiRequest(endpoint, method = 'GET', data = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    if (data) {
        options.body = JSON.stringify(data);
    }
    
    const response = await fetch(`${API_BASE}${endpoint}`, options);
    
    if (!response.ok && response.status !== 204) {
        throw new Error(`API Error: ${response.statusText}`);
    }
    
    if (response.status === 204) {
        return null;
    }
    
    return response.json();
}

// View Functions
async function showClients() {
    currentView = 'clients';
    currentClientId = null;
    currentProjectId = null;
    updateBreadcrumb([{ text: 'Home', action: 'showClients()' }]);
    
    const app = document.getElementById('app');
    app.innerHTML = '<div class="loading">Loading clients...</div>';
    
    try {
        const clients = await apiRequest('/clients');
        
        app.innerHTML = `
            <div class="toolbar">
                <h2>Clients</h2>
                <button onclick="openCreateClientModal()">+ Add Client</button>
            </div>
            <div class="grid" id="clientsGrid"></div>
        `;
        
        const grid = document.getElementById('clientsGrid');
        
        if (clients.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <h3>No clients yet</h3>
                    <p>Start by adding your first client</p>
                </div>
            `;
        } else {
            clients.forEach(client => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${escapeHtml(client.name)}</h3>
                    <p>${escapeHtml(client.description || 'No description')}</p>
                    <div class="meta">Created: ${formatDate(client.createdAt)}</div>
                    <div class="actions">
                        <button onclick="event.stopPropagation(); openEditClientModal('${client.id}')">Edit</button>
                        <button class="danger" onclick="event.stopPropagation(); deleteClient('${client.id}')">Delete</button>
                    </div>
                `;
                card.onclick = () => showProjects(client.id, client.name);
                grid.appendChild(card);
            });
        }
    } catch (error) {
        app.innerHTML = `<div class="empty-state"><h3>Error loading clients</h3><p>${error.message}</p></div>`;
    }
}

async function showProjects(clientId, clientName) {
    currentView = 'projects';
    currentClientId = clientId;
    currentProjectId = null;
    updateBreadcrumb([
        { text: 'Home', action: 'showClients()' },
        { text: clientName, action: '' }
    ]);
    
    const app = document.getElementById('app');
    app.innerHTML = '<div class="loading">Loading projects...</div>';
    
    try {
        const projects = await apiRequest(`/clients/${clientId}/projects`);
        
        app.innerHTML = `
            <div class="toolbar">
                <h2>Projects for ${escapeHtml(clientName)}</h2>
                <button onclick="openCreateProjectModal('${clientId}')">+ Add Project</button>
            </div>
            <div class="grid" id="projectsGrid"></div>
        `;
        
        const grid = document.getElementById('projectsGrid');
        
        if (projects.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <h3>No projects yet</h3>
                    <p>Start by adding your first project for this client</p>
                </div>
            `;
        } else {
            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${escapeHtml(project.name)}</h3>
                    <p>${escapeHtml(project.description || 'No description')}</p>
                    <div class="meta">
                        <span class="status-badge status-${project.status}">${project.status}</span>
                        <br>Created: ${formatDate(project.createdAt)}
                    </div>
                    <div class="actions">
                        <button onclick="event.stopPropagation(); openEditProjectModal('${project.id}')">Edit</button>
                        <button class="danger" onclick="event.stopPropagation(); deleteProject('${project.id}')">Delete</button>
                    </div>
                `;
                card.onclick = () => showPresentations(project.id, project.name, clientName);
                grid.appendChild(card);
            });
        }
    } catch (error) {
        app.innerHTML = `<div class="empty-state"><h3>Error loading projects</h3><p>${error.message}</p></div>`;
    }
}

async function showPresentations(projectId, projectName, clientName) {
    currentView = 'presentations';
    currentProjectId = projectId;
    updateBreadcrumb([
        { text: 'Home', action: 'showClients()' },
        { text: clientName, action: `showProjects('${currentClientId}', '${clientName}')` },
        { text: projectName, action: '' }
    ]);
    
    const app = document.getElementById('app');
    app.innerHTML = '<div class="loading">Loading presentations...</div>';
    
    try {
        const presentations = await apiRequest(`/projects/${projectId}/presentations`);
        
        app.innerHTML = `
            <div class="toolbar">
                <h2>Presentations for ${escapeHtml(projectName)}</h2>
                <button onclick="openCreatePresentationModal('${projectId}')">+ Add Presentation</button>
            </div>
            <div class="grid" id="presentationsGrid"></div>
        `;
        
        const grid = document.getElementById('presentationsGrid');
        
        if (presentations.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <h3>No presentations yet</h3>
                    <p>Start by adding your first presentation for this project</p>
                </div>
            `;
        } else {
            presentations.forEach(presentation => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${escapeHtml(presentation.title)}</h3>
                    <p>${escapeHtml(presentation.description || 'No description')}</p>
                    <div class="meta">
                        ${presentation.slides.length} slide(s)
                        <br>Created: ${formatDate(presentation.createdAt)}
                    </div>
                    <div class="actions">
                        <button onclick="event.stopPropagation(); openEditPresentationModal('${presentation.id}')">Edit</button>
                        <button class="danger" onclick="event.stopPropagation(); deletePresentation('${presentation.id}')">Delete</button>
                    </div>
                `;
                card.onclick = () => viewPresentation(presentation.id);
                grid.appendChild(card);
            });
        }
    } catch (error) {
        app.innerHTML = `<div class="empty-state"><h3>Error loading presentations</h3><p>${error.message}</p></div>`;
    }
}

async function viewPresentation(presentationId) {
    const app = document.getElementById('app');
    app.innerHTML = '<div class="loading">Loading presentation...</div>';
    
    try {
        const presentation = await apiRequest(`/presentations/${presentationId}`);
        
        app.innerHTML = `
            <div class="toolbar">
                <h2>${escapeHtml(presentation.title)}</h2>
                <button class="secondary" onclick="showPresentations('${currentProjectId}', '', '')">← Back</button>
            </div>
            <div class="presentation-viewer">
                <h3>📊 Presentation Content</h3>
                <p>${escapeHtml(presentation.description || '')}</p>
                <div id="slidesContainer"></div>
            </div>
        `;
        
        const slidesContainer = document.getElementById('slidesContainer');
        
        if (presentation.slides.length === 0) {
            slidesContainer.innerHTML = `
                <div class="empty-state">
                    <p>No slides in this presentation</p>
                </div>
            `;
        } else {
            presentation.slides.forEach((slide, index) => {
                const slideDiv = document.createElement('div');
                slideDiv.className = 'slide';
                slideDiv.innerHTML = `
                    <h4>Slide ${index + 1}: ${escapeHtml(slide.title)}</h4>
                    <div class="slide-content">${escapeHtml(slide.content)}</div>
                `;
                slidesContainer.appendChild(slideDiv);
            });
        }
    } catch (error) {
        app.innerHTML = `<div class="empty-state"><h3>Error loading presentation</h3><p>${error.message}</p></div>`;
    }
}

// Modal Functions
function openCreateClientModal() {
    document.getElementById('modalTitle').textContent = 'Create New Client';
    document.getElementById('formFields').innerHTML = `
        <div class="form-group">
            <label for="name">Client Name *</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" name="description"></textarea>
        </div>
    `;
    
    const form = document.getElementById('modalForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value
        };
        
        try {
            await apiRequest('/clients', 'POST', data);
            closeModal();
            showClients();
        } catch (error) {
            alert('Error creating client: ' + error.message);
        }
    };
    
    document.getElementById('modal').classList.add('active');
}

async function openEditClientModal(clientId) {
    try {
        const client = await apiRequest(`/clients/${clientId}`);
        
        document.getElementById('modalTitle').textContent = 'Edit Client';
        document.getElementById('formFields').innerHTML = `
            <div class="form-group">
                <label for="name">Client Name *</label>
                <input type="text" id="name" name="name" value="${escapeHtml(client.name)}" required>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" name="description">${escapeHtml(client.description || '')}</textarea>
            </div>
        `;
        
        const form = document.getElementById('modalForm');
        form.onsubmit = async (e) => {
            e.preventDefault();
            const data = {
                name: document.getElementById('name').value,
                description: document.getElementById('description').value
            };
            
            try {
                await apiRequest(`/clients/${clientId}`, 'PUT', data);
                closeModal();
                showClients();
            } catch (error) {
                alert('Error updating client: ' + error.message);
            }
        };
        
        document.getElementById('modal').classList.add('active');
    } catch (error) {
        alert('Error loading client: ' + error.message);
    }
}

function openCreateProjectModal(clientId) {
    document.getElementById('modalTitle').textContent = 'Create New Project';
    document.getElementById('formFields').innerHTML = `
        <div class="form-group">
            <label for="name">Project Name *</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="status">Status</label>
            <select id="status" name="status" style="width: 100%; padding: 10px; border: 1px solid #ced4da; border-radius: 4px;">
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="archived">Archived</option>
            </select>
        </div>
    `;
    
    const form = document.getElementById('modalForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const data = {
            clientId: clientId,
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            status: document.getElementById('status').value
        };
        
        try {
            await apiRequest('/projects', 'POST', data);
            closeModal();
            showProjects(clientId, '');
        } catch (error) {
            alert('Error creating project: ' + error.message);
        }
    };
    
    document.getElementById('modal').classList.add('active');
}

async function openEditProjectModal(projectId) {
    try {
        const project = await apiRequest(`/projects/${projectId}`);
        
        document.getElementById('modalTitle').textContent = 'Edit Project';
        document.getElementById('formFields').innerHTML = `
            <div class="form-group">
                <label for="name">Project Name *</label>
                <input type="text" id="name" name="name" value="${escapeHtml(project.name)}" required>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" name="description">${escapeHtml(project.description || '')}</textarea>
            </div>
            <div class="form-group">
                <label for="status">Status</label>
                <select id="status" name="status" style="width: 100%; padding: 10px; border: 1px solid #ced4da; border-radius: 4px;">
                    <option value="active" ${project.status === 'active' ? 'selected' : ''}>Active</option>
                    <option value="completed" ${project.status === 'completed' ? 'selected' : ''}>Completed</option>
                    <option value="archived" ${project.status === 'archived' ? 'selected' : ''}>Archived</option>
                </select>
            </div>
        `;
        
        const form = document.getElementById('modalForm');
        form.onsubmit = async (e) => {
            e.preventDefault();
            const data = {
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                status: document.getElementById('status').value
            };
            
            try {
                await apiRequest(`/projects/${projectId}`, 'PUT', data);
                closeModal();
                showProjects(currentClientId, '');
            } catch (error) {
                alert('Error updating project: ' + error.message);
            }
        };
        
        document.getElementById('modal').classList.add('active');
    } catch (error) {
        alert('Error loading project: ' + error.message);
    }
}

function openCreatePresentationModal(projectId) {
    document.getElementById('modalTitle').textContent = 'Create New Presentation';
    document.getElementById('formFields').innerHTML = `
        <div class="form-group">
            <label for="title">Presentation Title *</label>
            <input type="text" id="title" name="title" required>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" name="description"></textarea>
        </div>
        <div class="form-group">
            <label>Slides (JSON format)</label>
            <textarea id="slides" name="slides" placeholder='[{"title": "Slide 1", "content": "Content here"}]' style="font-family: monospace;"></textarea>
            <small style="color: #6c757d;">Enter slides as JSON array or leave empty</small>
        </div>
    `;
    
    const form = document.getElementById('modalForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        
        let slides = [];
        const slidesInput = document.getElementById('slides').value.trim();
        if (slidesInput) {
            try {
                slides = JSON.parse(slidesInput);
            } catch (error) {
                alert('Invalid JSON format for slides');
                return;
            }
        }
        
        const data = {
            projectId: projectId,
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            slides: slides
        };
        
        try {
            await apiRequest('/presentations', 'POST', data);
            closeModal();
            showPresentations(projectId, '', '');
        } catch (error) {
            alert('Error creating presentation: ' + error.message);
        }
    };
    
    document.getElementById('modal').classList.add('active');
}

async function openEditPresentationModal(presentationId) {
    try {
        const presentation = await apiRequest(`/presentations/${presentationId}`);
        
        document.getElementById('modalTitle').textContent = 'Edit Presentation';
        document.getElementById('formFields').innerHTML = `
            <div class="form-group">
                <label for="title">Presentation Title *</label>
                <input type="text" id="title" name="title" value="${escapeHtml(presentation.title)}" required>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" name="description">${escapeHtml(presentation.description || '')}</textarea>
            </div>
            <div class="form-group">
                <label>Slides (JSON format)</label>
                <textarea id="slides" name="slides" style="font-family: monospace;">${JSON.stringify(presentation.slides, null, 2)}</textarea>
                <small style="color: #6c757d;">Edit slides as JSON array</small>
            </div>
        `;
        
        const form = document.getElementById('modalForm');
        form.onsubmit = async (e) => {
            e.preventDefault();
            
            let slides = [];
            const slidesInput = document.getElementById('slides').value.trim();
            if (slidesInput) {
                try {
                    slides = JSON.parse(slidesInput);
                } catch (error) {
                    alert('Invalid JSON format for slides');
                    return;
                }
            }
            
            const data = {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                slides: slides
            };
            
            try {
                await apiRequest(`/presentations/${presentationId}`, 'PUT', data);
                closeModal();
                showPresentations(currentProjectId, '', '');
            } catch (error) {
                alert('Error updating presentation: ' + error.message);
            }
        };
        
        document.getElementById('modal').classList.add('active');
    } catch (error) {
        alert('Error loading presentation: ' + error.message);
    }
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Delete Functions
async function deleteClient(clientId) {
    if (!confirm('Are you sure you want to delete this client? This will also delete all associated projects and presentations.')) {
        return;
    }
    
    try {
        await apiRequest(`/clients/${clientId}`, 'DELETE');
        showClients();
    } catch (error) {
        alert('Error deleting client: ' + error.message);
    }
}

async function deleteProject(projectId) {
    if (!confirm('Are you sure you want to delete this project? This will also delete all associated presentations.')) {
        return;
    }
    
    try {
        await apiRequest(`/projects/${projectId}`, 'DELETE');
        showProjects(currentClientId, '');
    } catch (error) {
        alert('Error deleting project: ' + error.message);
    }
}

async function deletePresentation(presentationId) {
    if (!confirm('Are you sure you want to delete this presentation?')) {
        return;
    }
    
    try {
        await apiRequest(`/presentations/${presentationId}`, 'DELETE');
        showPresentations(currentProjectId, '', '');
    } catch (error) {
        alert('Error deleting presentation: ' + error.message);
    }
}

// Utility Functions
function updateBreadcrumb(items) {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = items.map((item, index) => {
        if (index === items.length - 1 || !item.action) {
            return `<span>${escapeHtml(item.text)}</span>`;
        }
        return `<a href="#" onclick="${item.action}; return false;">${escapeHtml(item.text)}</a> /`;
    }).join(' ');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
