const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_DIR = path.join(__dirname, '../data');
const CLIENTS_FILE = path.join(DATA_DIR, 'clients.json');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const PRESENTATIONS_FILE = path.join(DATA_DIR, 'presentations.json');

class Database {
  constructor() {
    this.clients = [];
    this.projects = [];
    this.presentations = [];
  }

  async initialize() {
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
      await this.loadData();
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }

  async loadData() {
    try {
      const clientsData = await fs.readFile(CLIENTS_FILE, 'utf8');
      this.clients = JSON.parse(clientsData);
    } catch (error) {
      this.clients = [];
      await this.saveClients();
    }

    try {
      const projectsData = await fs.readFile(PROJECTS_FILE, 'utf8');
      this.projects = JSON.parse(projectsData);
    } catch (error) {
      this.projects = [];
      await this.saveProjects();
    }

    try {
      const presentationsData = await fs.readFile(PRESENTATIONS_FILE, 'utf8');
      this.presentations = JSON.parse(presentationsData);
    } catch (error) {
      this.presentations = [];
      await this.savePresentations();
    }
  }

  async saveClients() {
    await fs.writeFile(CLIENTS_FILE, JSON.stringify(this.clients, null, 2));
  }

  async saveProjects() {
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(this.projects, null, 2));
  }

  async savePresentations() {
    await fs.writeFile(PRESENTATIONS_FILE, JSON.stringify(this.presentations, null, 2));
  }

  // Client methods
  async getAllClients() {
    return this.clients;
  }

  async getClientById(id) {
    return this.clients.find(client => client.id === id);
  }

  async createClient(clientData) {
    const newClient = {
      id: uuidv4(),
      name: clientData.name,
      description: clientData.description || '',
      createdAt: new Date().toISOString()
    };
    this.clients.push(newClient);
    await this.saveClients();
    return newClient;
  }

  async updateClient(id, clientData) {
    const index = this.clients.findIndex(client => client.id === id);
    if (index === -1) return null;
    
    this.clients[index] = {
      ...this.clients[index],
      name: clientData.name || this.clients[index].name,
      description: clientData.description !== undefined ? clientData.description : this.clients[index].description,
      updatedAt: new Date().toISOString()
    };
    await this.saveClients();
    return this.clients[index];
  }

  async deleteClient(id) {
    const index = this.clients.findIndex(client => client.id === id);
    if (index === -1) return false;
    
    // Delete associated projects and presentations
    this.projects = this.projects.filter(project => project.clientId !== id);
    this.presentations = this.presentations.filter(pres => {
      const project = this.projects.find(p => p.id === pres.projectId);
      return project && project.clientId !== id;
    });
    
    this.clients.splice(index, 1);
    await this.saveClients();
    await this.saveProjects();
    await this.savePresentations();
    return true;
  }

  // Project methods
  async getProjectsByClientId(clientId) {
    return this.projects.filter(project => project.clientId === clientId);
  }

  async getProjectById(id) {
    return this.projects.find(project => project.id === id);
  }

  async createProject(projectData) {
    const newProject = {
      id: uuidv4(),
      clientId: projectData.clientId,
      name: projectData.name,
      description: projectData.description || '',
      status: projectData.status || 'active',
      createdAt: new Date().toISOString()
    };
    this.projects.push(newProject);
    await this.saveProjects();
    return newProject;
  }

  async updateProject(id, projectData) {
    const index = this.projects.findIndex(project => project.id === id);
    if (index === -1) return null;
    
    this.projects[index] = {
      ...this.projects[index],
      name: projectData.name || this.projects[index].name,
      description: projectData.description !== undefined ? projectData.description : this.projects[index].description,
      status: projectData.status || this.projects[index].status,
      updatedAt: new Date().toISOString()
    };
    await this.saveProjects();
    return this.projects[index];
  }

  async deleteProject(id) {
    const index = this.projects.findIndex(project => project.id === id);
    if (index === -1) return false;
    
    // Delete associated presentations
    this.presentations = this.presentations.filter(pres => pres.projectId !== id);
    
    this.projects.splice(index, 1);
    await this.saveProjects();
    await this.savePresentations();
    return true;
  }

  // Presentation methods
  async getPresentationsByProjectId(projectId) {
    return this.presentations.filter(pres => pres.projectId === projectId);
  }

  async getPresentationById(id) {
    return this.presentations.find(pres => pres.id === id);
  }

  async createPresentation(presentationData) {
    const newPresentation = {
      id: uuidv4(),
      projectId: presentationData.projectId,
      title: presentationData.title,
      description: presentationData.description || '',
      slides: presentationData.slides || [],
      createdAt: new Date().toISOString()
    };
    this.presentations.push(newPresentation);
    await this.savePresentations();
    return newPresentation;
  }

  async updatePresentation(id, presentationData) {
    const index = this.presentations.findIndex(pres => pres.id === id);
    if (index === -1) return null;
    
    this.presentations[index] = {
      ...this.presentations[index],
      title: presentationData.title || this.presentations[index].title,
      description: presentationData.description !== undefined ? presentationData.description : this.presentations[index].description,
      slides: presentationData.slides || this.presentations[index].slides,
      updatedAt: new Date().toISOString()
    };
    await this.savePresentations();
    return this.presentations[index];
  }

  async deletePresentation(id) {
    const index = this.presentations.findIndex(pres => pres.id === id);
    if (index === -1) return false;
    
    this.presentations.splice(index, 1);
    await this.savePresentations();
    return true;
  }
}

module.exports = new Database();
