# API Usage Examples

This document provides practical examples of using the Multi-Tenant Presentation Platform API.

## Base URL
```
http://localhost:3000/api
```

## 1. Create a New Client

**Request:**
```bash
curl -X POST http://localhost:3000/api/clients \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tech Innovations Inc",
    "description": "A cutting-edge technology company"
  }'
```

**Response:**
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "name": "Tech Innovations Inc",
  "description": "A cutting-edge technology company",
  "createdAt": "2025-11-08T14:00:00.000Z"
}
```

## 2. List All Clients

**Request:**
```bash
curl http://localhost:3000/api/clients
```

**Response:**
```json
[
  {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "Tech Innovations Inc",
    "description": "A cutting-edge technology company",
    "createdAt": "2025-11-08T14:00:00.000Z"
  }
]
```

## 3. Create a Project for a Client

**Request:**
```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "Mobile App Development",
    "description": "iOS and Android mobile application",
    "status": "active"
  }'
```

**Response:**
```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "clientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "name": "Mobile App Development",
  "description": "iOS and Android mobile application",
  "status": "active",
  "createdAt": "2025-11-08T14:01:00.000Z"
}
```

## 4. Get All Projects for a Client

**Request:**
```bash
curl http://localhost:3000/api/clients/a1b2c3d4-e5f6-7890-abcd-ef1234567890/projects
```

**Response:**
```json
[
  {
    "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "clientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "name": "Mobile App Development",
    "description": "iOS and Android mobile application",
    "status": "active",
    "createdAt": "2025-11-08T14:01:00.000Z"
  }
]
```

## 5. Create a Presentation with Slides

**Request:**
```bash
curl -X POST http://localhost:3000/api/presentations \
  -H "Content-Type: application/json" \
  -d '{
    "projectId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "title": "Sprint Review Q1 2025",
    "description": "Quarterly sprint review and accomplishments",
    "slides": [
      {
        "title": "Sprint Overview",
        "content": "This quarter we focused on core features and user experience improvements."
      },
      {
        "title": "Key Achievements",
        "content": "- Completed 45 user stories\n- Achieved 95% test coverage\n- Reduced load time by 40%"
      },
      {
        "title": "Challenges & Solutions",
        "content": "Main challenge was API performance. Implemented caching and reduced response time by 60%."
      },
      {
        "title": "Next Quarter Goals",
        "content": "Focus areas:\n1. Mobile optimization\n2. New payment integration\n3. Advanced analytics"
      }
    ]
  }'
```

**Response:**
```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
  "projectId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "title": "Sprint Review Q1 2025",
  "description": "Quarterly sprint review and accomplishments",
  "slides": [
    {
      "title": "Sprint Overview",
      "content": "This quarter we focused on core features and user experience improvements."
    },
    {
      "title": "Key Achievements",
      "content": "- Completed 45 user stories\n- Achieved 95% test coverage\n- Reduced load time by 40%"
    },
    {
      "title": "Challenges & Solutions",
      "content": "Main challenge was API performance. Implemented caching and reduced response time by 60%."
    },
    {
      "title": "Next Quarter Goals",
      "content": "Focus areas:\n1. Mobile optimization\n2. New payment integration\n3. Advanced analytics"
    }
  ],
  "createdAt": "2025-11-08T14:02:00.000Z"
}
```

## 6. Get Presentation by ID

**Request:**
```bash
curl http://localhost:3000/api/presentations/c3d4e5f6-a7b8-9012-cdef-123456789012
```

**Response:**
```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
  "projectId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "title": "Sprint Review Q1 2025",
  "description": "Quarterly sprint review and accomplishments",
  "slides": [
    {
      "title": "Sprint Overview",
      "content": "This quarter we focused on core features and user experience improvements."
    },
    {
      "title": "Key Achievements",
      "content": "- Completed 45 user stories\n- Achieved 95% test coverage\n- Reduced load time by 40%"
    },
    {
      "title": "Challenges & Solutions",
      "content": "Main challenge was API performance. Implemented caching and reduced response time by 60%."
    },
    {
      "title": "Next Quarter Goals",
      "content": "Focus areas:\n1. Mobile optimization\n2. New payment integration\n3. Advanced analytics"
    }
  ],
  "createdAt": "2025-11-08T14:02:00.000Z"
}
```

## 7. Update a Project Status

**Request:**
```bash
curl -X PUT http://localhost:3000/api/projects/b2c3d4e5-f6a7-8901-bcde-f12345678901 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```

**Response:**
```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "clientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "name": "Mobile App Development",
  "description": "iOS and Android mobile application",
  "status": "completed",
  "createdAt": "2025-11-08T14:01:00.000Z",
  "updatedAt": "2025-11-08T14:03:00.000Z"
}
```

## 8. Delete a Presentation

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/presentations/c3d4e5f6-a7b8-9012-cdef-123456789012
```

**Response:**
```
HTTP 204 No Content
```

## 9. Health Check

**Request:**
```bash
curl http://localhost:3000/api/health
```

**Response:**
```json
{
  "status": "ok",
  "message": "Multi-tenant Presentation Platform API"
}
```

## Using with JavaScript/Node.js

```javascript
// Create a client
async function createClient(name, description) {
  const response = await fetch('http://localhost:3000/api/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, description })
  });
  return await response.json();
}

// Get all projects for a client
async function getClientProjects(clientId) {
  const response = await fetch(`http://localhost:3000/api/clients/${clientId}/projects`);
  return await response.json();
}

// Create a presentation with slides
async function createPresentation(projectId, title, description, slides) {
  const response = await fetch('http://localhost:3000/api/presentations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ projectId, title, description, slides })
  });
  return await response.json();
}
```

## Using with Python

```python
import requests
import json

BASE_URL = "http://localhost:3000/api"

# Create a client
def create_client(name, description):
    response = requests.post(
        f"{BASE_URL}/clients",
        json={"name": name, "description": description}
    )
    return response.json()

# Get all clients
def get_clients():
    response = requests.get(f"{BASE_URL}/clients")
    return response.json()

# Create a project
def create_project(client_id, name, description, status="active"):
    response = requests.post(
        f"{BASE_URL}/projects",
        json={
            "clientId": client_id,
            "name": name,
            "description": description,
            "status": status
        }
    )
    return response.json()
```

## Error Handling

### Client Not Found
```json
{
  "error": "Client not found"
}
```
Status Code: 404

### Missing Required Field
```json
{
  "error": "Name is required"
}
```
Status Code: 400

### Project Not Found When Creating Presentation
```json
{
  "error": "Project not found"
}
```
Status Code: 404

## Data Persistence

All data is automatically persisted to JSON files in the `data/` directory:
- `data/clients.json` - All client records
- `data/projects.json` - All project records
- `data/presentations.json` - All presentation records

## Best Practices

1. **Always validate client exists** before creating projects
2. **Always validate project exists** before creating presentations
3. **Use descriptive names** for better organization
4. **Set appropriate project status** (active, completed, archived)
5. **Include meaningful slide content** in presentations
6. **Handle errors gracefully** in your client application
