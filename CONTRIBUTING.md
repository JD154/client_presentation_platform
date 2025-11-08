# Contributing to Multi-Tenant Presentation Platform

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/client_presentation_platform.git
   cd client_presentation_platform
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```

## 📁 Project Structure

Understanding the project structure will help you contribute effectively:

```
client_presentation_platform/
├── server/
│   ├── index.js          # Express server + API routes
│   └── database.js       # Data management layer
├── client/
│   └── public/
│       ├── index.html    # UI structure and styling
│       └── app.js        # Frontend application logic
├── data/                 # JSON data files (auto-generated, gitignored)
├── package.json
├── .gitignore
├── README.md
├── API_EXAMPLES.md
└── CONTRIBUTING.md
```

## 🎯 Areas for Contribution

### 1. Backend Enhancements
- Add database support (PostgreSQL, MongoDB, etc.)
- Implement user authentication and authorization
- Add API rate limiting
- Implement pagination for large datasets
- Add search and filtering capabilities
- Create automated backups for data files

### 2. Frontend Improvements
- Add rich text editor for slide content
- Implement drag-and-drop slide reordering
- Add presentation preview mode
- Create export to PDF functionality
- Implement real-time collaboration features
- Add dark mode support
- Improve mobile responsiveness

### 3. New Features
- File upload support for presentations (images, videos)
- Templates for presentations
- Analytics and reporting dashboard
- Email notifications
- Presentation sharing with public links
- Version control for presentations
- Comments and feedback system

### 4. Testing
- Add unit tests for backend API
- Add integration tests
- Create end-to-end tests
- Add performance tests

### 5. Documentation
- Add JSDoc comments
- Create video tutorials
- Write deployment guides
- Add localization support

## 🛠️ Development Guidelines

### Code Style

**JavaScript:**
- Use `async/await` for asynchronous operations
- Use meaningful variable and function names
- Keep functions focused and small
- Use ES6+ features
- Add comments for complex logic

**API Design:**
- Follow RESTful conventions
- Use appropriate HTTP status codes
- Return consistent JSON responses
- Validate input data
- Handle errors gracefully

### Commit Messages

Use clear and descriptive commit messages:

```
feat: Add pagination support for presentations
fix: Resolve client deletion cascade issue
docs: Update API examples with new endpoints
refactor: Simplify database query logic
test: Add unit tests for project endpoints
```

Prefixes:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Pull Request Process

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, tested code
   - Update documentation as needed
   - Follow the code style guidelines

3. **Test your changes:**
   ```bash
   npm start
   # Test manually in browser
   # Run any automated tests
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: Add your feature description"
   ```

5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request:**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your feature branch
   - Provide a clear description of your changes
   - Reference any related issues

### Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] Changes have been tested thoroughly
- [ ] Documentation has been updated
- [ ] Commit messages are clear and descriptive
- [ ] No unnecessary files or dependencies added
- [ ] Data files are not committed (check .gitignore)

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description:** Clear description of the bug
2. **Steps to Reproduce:**
   - Step 1
   - Step 2
   - Step 3
3. **Expected Behavior:** What should happen
4. **Actual Behavior:** What actually happens
5. **Environment:**
   - OS: [e.g., Windows 10, macOS 14.0]
   - Node.js version: [e.g., v18.0.0]
   - Browser: [e.g., Chrome 120]
6. **Screenshots:** If applicable
7. **Error Messages:** Complete error logs

## 💡 Suggesting Features

When suggesting features, please include:

1. **Feature Description:** Clear description of the feature
2. **Use Case:** Why is this feature needed?
3. **Proposed Solution:** How should it work?
4. **Alternatives Considered:** Other approaches you've thought about
5. **Additional Context:** Screenshots, mockups, examples

## 🧪 Testing Guidelines

### Manual Testing

1. **Test all CRUD operations:**
   - Create, read, update, delete clients
   - Create, read, update, delete projects
   - Create, read, update, delete presentations

2. **Test navigation:**
   - Breadcrumb navigation works correctly
   - Back buttons function properly
   - All links are working

3. **Test data persistence:**
   - Stop and restart server
   - Verify data is still present

4. **Test error handling:**
   - Try to create items with missing fields
   - Try to access non-existent items
   - Check error messages are clear

### Automated Testing (Future)

When adding tests, follow these patterns:

```javascript
// Example unit test
describe('Database', () => {
  it('should create a client', async () => {
    const client = await db.createClient({
      name: 'Test Client',
      description: 'Test description'
    });
    expect(client).toHaveProperty('id');
    expect(client.name).toBe('Test Client');
  });
});

// Example API test
describe('POST /api/clients', () => {
  it('should create a new client', async () => {
    const response = await request(app)
      .post('/api/clients')
      .send({ name: 'Test Client', description: 'Test' })
      .expect(201);
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Test Client');
  });
});
```

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [REST API Best Practices](https://restfulapi.net/)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)

## 🤝 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Harassment, trolling, or insulting comments
- Personal or political attacks
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

## 📧 Contact

If you have questions or need help:
- Open an issue on GitHub
- Review existing documentation
- Check the README for setup instructions

## 🙏 Thank You

Thank you for contributing to the Multi-Tenant Presentation Platform! Your efforts help make this project better for everyone.
