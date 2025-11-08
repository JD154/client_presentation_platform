# 🎯 Multi-Tenant Presentation Platform

A scalable web application for managing multiple clients, their projects, and presentations in one centralized platform.

## 🌟 Features

- **Multi-tenant Architecture**: Manage multiple clients independently
- **Project Management**: Each client can have multiple projects
- **Presentation System**: Create and view presentations for each project
- **RESTful API**: Clean API for all CRUD operations
- **Modern UI**: Intuitive and responsive web interface
- **Data Persistence**: JSON file-based storage (easily upgradeable to a database)

## 🏗️ Architecture

```
Platform
├── Clients (N clients)
│   ├── Client 1
│   │   ├── Project A
│   │   │   ├── Presentation 1
│   │   │   └── Presentation 2
│   │   └── Project B
│   │       └── Presentation 3
│   └── Client 2
│       └── Project C
│           └── Presentation 4
```

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JD154/client_presentation_platform.git
cd client_presentation_platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
client_presentation_platform/
├── server/
│   ├── index.js          # Express server and API routes
│   └── database.js       # Data management layer
├── client/
│   └── public/
│       ├── index.html    # Main HTML file
│       └── app.js        # Frontend JavaScript
├── data/                 # JSON data files (auto-generated)
│   ├── clients.json
│   ├── projects.json
│   └── presentations.json
├── package.json
└── README.md
```

## 🔌 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### Clients

- **GET** `/clients` - Get all clients
- **GET** `/clients/:id` - Get a specific client
- **POST** `/clients` - Create a new client
  ```json
  {
    "name": "Client Name",
    "description": "Client description"
  }
  ```
- **PUT** `/clients/:id` - Update a client
- **DELETE** `/clients/:id` - Delete a client (and all associated data)

#### Projects

- **GET** `/clients/:clientId/projects` - Get all projects for a client
- **GET** `/projects/:id` - Get a specific project
- **POST** `/projects` - Create a new project
  ```json
  {
    "clientId": "client-uuid",
    "name": "Project Name",
    "description": "Project description",
    "status": "active"
  }
  ```
- **PUT** `/projects/:id` - Update a project
- **DELETE** `/projects/:id` - Delete a project (and all associated presentations)

#### Presentations

- **GET** `/projects/:projectId/presentations` - Get all presentations for a project
- **GET** `/presentations/:id` - Get a specific presentation
- **POST** `/presentations` - Create a new presentation
  ```json
  {
    "projectId": "project-uuid",
    "title": "Presentation Title",
    "description": "Presentation description",
    "slides": [
      {
        "title": "Slide 1",
        "content": "Slide content"
      }
    ]
  }
  ```
- **PUT** `/presentations/:id` - Update a presentation
- **DELETE** `/presentations/:id` - Delete a presentation

## 💻 Usage Examples

### Creating a Complete Flow

1. **Create a Client**
   - Click "Add Client" button
   - Fill in client name and description
   - Click "Save"

2. **Add a Project**
   - Click on the client card
   - Click "Add Project"
   - Fill in project details
   - Select project status (Active/Completed/Archived)
   - Click "Save"

3. **Create a Presentation**
   - Click on the project card
   - Click "Add Presentation"
   - Fill in presentation details
   - Add slides in JSON format:
   ```json
   [
     {
       "title": "Introduction",
       "content": "Welcome to our presentation"
     },
     {
       "title": "Main Content",
       "content": "Key points and details"
     }
   ]
   ```
   - Click "Save"

4. **View Presentation**
   - Click on the presentation card
   - Navigate through slides

## 🎨 Features Highlight

### Multi-tenant Isolation
Each client's data is completely isolated, ensuring:
- Data privacy
- Independent project management
- Scalable architecture

### Presentation System
- Multiple slides per presentation
- Rich content support
- Easy editing and management

### Modern UI
- Gradient design
- Card-based layout
- Responsive design
- Intuitive navigation
- Real-time updates

## 🔧 Configuration

### Port Configuration
The server runs on port 3000 by default. To change:
```bash
PORT=8080 npm start
```

### Data Storage
Data is stored in JSON files in the `data/` directory. Each entity type has its own file:
- `clients.json` - Client data
- `projects.json` - Project data
- `presentations.json` - Presentation data

## 🚀 Future Enhancements

- Database integration (PostgreSQL, MongoDB)
- User authentication and authorization
- File upload support for presentations
- Rich text editor for slides
- Export presentations to PDF
- Real-time collaboration
- Analytics and reporting
- Email notifications
- API rate limiting
- Advanced search and filtering

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🐛 Troubleshooting

### Server won't start
- Ensure Node.js is installed: `node --version`
- Check if port 3000 is available
- Delete `node_modules` and run `npm install` again

### Data not persisting
- Check if the `data/` directory exists
- Verify write permissions for the data directory
- Check server logs for errors

### Cannot create items
- Verify the API is running: visit `http://localhost:3000/api/health`
- Check browser console for errors
- Ensure required fields are filled

## 📧 Support

For issues or questions, please open an issue on GitHub.