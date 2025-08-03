# MovieApp Project Structure

This document provides a comprehensive overview of the MovieApp project structure and organization.

## 📁 Root Directory Structure

```
movieApp/
├── 📚 docs/                     # Project documentation
├── 🎨 frontend/                 # Angular frontend application
├── ⚙️ server/                   # Node.js backend application
├── 🔧 scripts/                  # Development and utility scripts
├── ⚙️ config/                   # Configuration files
├── 🗄️ database/                # Database schema and migrations
├── 📊 logs/                     # Application logs
├── 🚀 deployment/               # Deployment configurations
├── 🔧 .github/                  # GitHub Actions CI/CD
├── 📄 package.json              # Root workspace configuration
├── 🛠️ Makefile                 # Development commands
├── 📋 .nvmrc                    # Node.js version specification
├── ⚙️ .editorconfig            # Editor configuration
└── 📖 README.md                 # Project overview
```

## 📚 Documentation (`docs/`)

Contains all project documentation:

- **README.md** - Documentation index and quick start guide
- **API_DOCUMENTATION.md** - Complete API reference and endpoints
- **IMPROVEMENTS.md** - Project improvements and enhancements
- **TEST_RESULTS.md** - Test coverage and results
- **ANGULAR_UPGRADE_SUMMARY.md** - Angular upgrade details
- **PACKAGE_UPGRADE_SUMMARY.md** - Package upgrade history
- **ACCESSIBILITY_GUIDE.md** - Frontend accessibility guidelines
- **STYLING_GUIDE.md** - Frontend styling guidelines
- **PROJECT_STRUCTURE.md** - This file

## 🎨 Frontend (`frontend/`)

Angular 18+ application with modern architecture:

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/          # Angular components
│   │   │   ├── movie/          # Movie-related components
│   │   │   ├── comment/        # Comment system components
│   │   │   ├── auth/           # Authentication components
│   │   │   └── ui/             # Reusable UI components
│   │   ├── services/           # API services and business logic
│   │   ├── models/             # TypeScript interfaces
│   │   ├── guards/             # Route guards
│   │   ├── directives/         # Custom directives
│   │   ├── helpers/            # Utility functions
│   │   └── http_interceptors/  # HTTP interceptors
│   ├── assets/                 # Static assets
│   └── environments/           # Environment configurations
├── e2e/                        # End-to-end tests
├── package.json                # Frontend dependencies
└── angular.json               # Angular CLI configuration
```

## ⚙️ Backend (`server/`)

Node.js/Express.js API with clean architecture:

```
server/
├── controllers/                # Route controllers
│   ├── auth-controller.js     # Authentication logic
│   ├── movie-controller.js    # Movie management
│   ├── comment-controller.js  # Comment system
│   └── user-controller.js     # User management
├── routes/                     # API route definitions
├── middleware/                 # Express middleware
│   ├── auth.js                # Authentication middleware
│   ├── validation.js          # Input validation
│   ├── errorHandler.js        # Error handling
│   └── logger.js              # Logging middleware
├── models/                     # Database models
├── db/                        # Database configuration
├── tests/                     # Backend tests
├── logs/                      # Server logs
├── public/                    # Static files (built frontend)
└── app.js                     # Main server file
```

## 🔧 Scripts (`scripts/`)

Development and utility scripts:

- **start-dev.sh** - Start development servers
- **stop-dev.sh** - Stop development servers
- **setup.sh** - Initial project setup

## ⚙️ Configuration (`config/`)

Configuration files and templates:

- **env.example** - Environment variables template

## 🗄️ Database (`database/`)

Database-related files:

- **movies-app.sql** - Database schema and sample data

## 📊 Logs (`logs/`)

Centralized logging directory for all application logs.

## 🚀 Deployment (`deployment/`)

Deployment and infrastructure files:

- **docker-compose.yml** - Docker Compose configuration

## 🔧 Development Tools

### Root Package.json
Workspace configuration with scripts for:
- Development server management
- Testing (backend and frontend)
- Linting and code quality
- Building and deployment
- Docker operations

### Makefile
Convenient commands for common development tasks:
```bash
make dev          # Start development servers
make stop         # Stop development servers
make setup        # Run initial setup
make install      # Install all dependencies
make test         # Run all tests
make lint         # Run linting
make build        # Build for production
```

### Configuration Files
- **.nvmrc** - Node.js version specification
- **.editorconfig** - Consistent coding style across editors
- **.gitignore** - Git ignore patterns

## 🎯 Best Practices

### 1. **Separation of Concerns**
- Clear separation between frontend and backend
- Modular component structure
- Dedicated directories for specific purposes

### 2. **Configuration Management**
- Environment-specific configurations
- Centralized configuration files
- Template files for easy setup

### 3. **Documentation**
- Comprehensive documentation in dedicated directory
- API documentation with examples
- Setup and deployment guides

### 4. **Development Experience**
- Convenient scripts and commands
- Consistent coding standards
- Automated testing and linting

### 5. **Deployment Ready**
- Docker configuration
- Environment variable management
- Production build processes

## 🚀 Getting Started

1. **Setup**: Run `make setup` or `npm run setup`
2. **Install**: Run `make install` or `npm run install:all`
3. **Develop**: Run `make dev` or `npm run dev`
4. **Test**: Run `make test` or `npm run test`
5. **Build**: Run `make build` or `npm run build`

## 📝 Notes

- All paths have been updated to use consistent naming (`frontend` instead of `front_end`)
- Scripts are organized in a dedicated directory for better maintainability
- Configuration files are centralized for easier management
- Documentation is comprehensive and well-organized
- The structure follows industry best practices for full-stack applications 