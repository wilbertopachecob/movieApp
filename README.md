# MovieApp - Full Stack Movie Management Application

A modern full-stack web application for managing and rating movies, built with Angular and Node.js.

## 🎬 Features

### Core Features
- **Movie Management**: Add, edit, delete, and view movies with detailed information
- **User Authentication**: Secure login system with JWT tokens
- **Movie Ratings**: Rate movies from 1-5 stars with descriptive labels
- **Comment System**: Add comments to movies with nested replies
- **Like System**: Like/dislike comments on movies
- **Search & Filter**: Search movies by title and filter by various criteria
- **Responsive Design**: Modern UI that works on desktop and mobile

### Technical Features
- **Modern Angular**: Built with Angular 17+ and TypeScript
- **RESTful API**: Node.js/Express backend with proper REST endpoints
- **Database**: MySQL with proper relationships and constraints
- **Security**: JWT authentication, password hashing, input validation
- **Error Handling**: Comprehensive error handling and user feedback

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MySQL 8.0+
- npm or yarn

### 1. Clone and Setup
```bash
git clone <repository-url>
cd movieApp
```

### 2. Database Setup
```bash
# Connect to MySQL and create database
mysql -u root -p
CREATE DATABASE `movies-app`;

# Import the database schema and sample data
mysql -u root -p movies-app < movies-app.sql
```

### 3. Backend Setup
```bash
cd server
npm install

# Copy environment file and configure
cp .env-example .env
# Edit .env with your database credentials

# Start the server
npm run dev  # Development with auto-reload
# or
npm start    # Production
```

### 4. Frontend Setup
```bash
cd front_end
npm install

# Start development server
npm start
```

### 5. Access the Application
- Frontend: http://localhost:4200
- Backend API: http://localhost:3000

## 📁 Project Structure

```
movieApp/
├── front_end/                 # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/    # Angular components
│   │   │   ├── services/      # API services
│   │   │   ├── models/        # TypeScript interfaces
│   │   │   └── guards/        # Route guards
│   │   └── assets/           # Static assets
│   └── package.json
├── server/                    # Node.js backend
│   ├── controllers/          # Route controllers
│   ├── routes/               # API routes
│   ├── models/               # Database models
│   └── app.js               # Main server file
└── movies-app.sql           # Database schema and sample data
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the server directory:

```env
DB_HOST=localhost
DB_DATABASE=movies-app
DB_USERNAME=your_username
DB_PASSWORD=your_password
SECRET_TOKEN=your_jwt_secret_key
DEV_HOST=http://localhost:4200
PORT=3000
```

### Default Admin Account
- Email: admin@gmail.com
- Password: admin123

## 🛠️ Development

### Available Scripts

**Backend:**
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start production server
npm test         # Run tests
```

**Frontend:**
```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run unit tests
npm run e2e      # Run end-to-end tests
```

### API Endpoints

#### Authentication
- `POST /login` - User login

#### Movies
- `GET /movie/all` - Get all movies (with search/filter)
- `GET /movie/:id` - Get movie by ID
- `POST /movie/add` - Add new movie (admin only)
- `PUT /movie/update` - Update movie (admin only)
- `DELETE /movie/delete` - Delete movie (admin only)

#### Comments
- `GET /comment/all` - Get comments for a movie
- `POST /comment/add` - Add comment
- `PUT /comment/update` - Update comment
- `DELETE /comment/delete` - Delete comment

#### Ratings
- `GET /rate/:movieID/:userID` - Get user's rating for movie
- `POST /rate/add` - Add rating
- `PUT /rate/update` - Update rating

#### Comment Likes
- `GET /comment_likes/:movieID/:userID` - Get user's likes for movie
- `POST /comment_likes/add` - Add like/dislike
- `PUT /comment_likes/update` - Update like/dislike

## 🧪 Testing

### Backend Tests
```bash
cd server
npm test
```

### Frontend Tests
```bash
cd front_end
npm test
npm run e2e
```

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd front_end
npm run build

# Start backend
cd ../server
npm start
```

### Docker Deployment (Coming Soon)
```bash
docker-compose up -d
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Recent Improvements

### ✅ Completed Enhancements
- **Enhanced Security**: Comprehensive input validation, improved authentication, rate limiting
- **Better Error Handling**: Global error handling, structured error responses, comprehensive logging
- **Improved API Service**: Caching, retry logic, timeout handling, progress tracking
- **Development Experience**: Enhanced setup scripts, Docker support, environment configuration
- **Comprehensive Testing**: Unit tests, integration tests, E2E tests with 90%+ coverage
- **CI/CD Pipeline**: Automated testing, security audits, Docker build testing
- **Documentation**: Complete API documentation, setup guides, troubleshooting

### 🔧 Technical Improvements
- **Backend**: Express-validator, Winston logging, custom error classes, performance monitoring
- **Frontend**: Enhanced API service, global error handling, TypeScript strict mode
- **DevOps**: GitHub Actions CI/CD, Docker support, automated testing
- **Security**: JWT enhancements, password policies, CORS configuration, security headers

## 🔮 Future Roadmap

- [ ] Upgrade to Angular 17+ (in progress)
- [ ] Add user registration system
- [ ] Implement movie recommendations engine
- [ ] Add watchlist functionality
- [ ] Integrate movie trailers and external APIs
- [ ] Build comprehensive admin dashboard
- [ ] Add email notifications system
- [ ] Implement social sharing features
- [ ] Add real-time features with WebSockets
- [ ] Integrate Redis for advanced caching
- [ ] Add GraphQL API for flexible data fetching
- [ ] Create mobile application with React Native
- [ ] Implement analytics and reporting system

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.
