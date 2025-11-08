const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

// Client routes
app.get('/api/clients', async (req, res) => {
  try {
    const clients = await db.getAllClients();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/clients/:id', async (req, res) => {
  try {
    const client = await db.getClientById(req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/clients', async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const client = await db.createClient({ name, description });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/clients/:id', async (req, res) => {
  try {
    const { name, description } = req.body;
    const client = await db.updateClient(req.params.id, { name, description });
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/clients/:id', async (req, res) => {
  try {
    const success = await db.deleteClient(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Project routes
app.get('/api/clients/:clientId/projects', async (req, res) => {
  try {
    const projects = await db.getProjectsByClientId(req.params.clientId);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await db.getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const { clientId, name, description, status } = req.body;
    if (!clientId || !name) {
      return res.status(400).json({ error: 'ClientId and name are required' });
    }
    const client = await db.getClientById(clientId);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    const project = await db.createProject({ clientId, name, description, status });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/projects/:id', async (req, res) => {
  try {
    const { name, description, status } = req.body;
    const project = await db.updateProject(req.params.id, { name, description, status });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  try {
    const success = await db.deleteProject(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Presentation routes
app.get('/api/projects/:projectId/presentations', async (req, res) => {
  try {
    const presentations = await db.getPresentationsByProjectId(req.params.projectId);
    res.json(presentations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/presentations/:id', async (req, res) => {
  try {
    const presentation = await db.getPresentationById(req.params.id);
    if (!presentation) {
      return res.status(404).json({ error: 'Presentation not found' });
    }
    res.json(presentation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/presentations', async (req, res) => {
  try {
    const { projectId, title, description, slides } = req.body;
    if (!projectId || !title) {
      return res.status(400).json({ error: 'ProjectId and title are required' });
    }
    const project = await db.getProjectById(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    const presentation = await db.createPresentation({ projectId, title, description, slides });
    res.status(201).json(presentation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/presentations/:id', async (req, res) => {
  try {
    const { title, description, slides } = req.body;
    const presentation = await db.updatePresentation(req.params.id, { title, description, slides });
    if (!presentation) {
      return res.status(404).json({ error: 'Presentation not found' });
    }
    res.json(presentation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/presentations/:id', async (req, res) => {
  try {
    const success = await db.deletePresentation(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Presentation not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Multi-tenant Presentation Platform API' });
});

// Initialize database and start server
async function startServer() {
  try {
    await db.initialize();
    console.log('Database initialized');
    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`API available at http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
