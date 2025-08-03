#!/bin/bash

# MovieApp Setup Script
# This script sets up the complete MovieApp development environment

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check Node.js version
check_node_version() {
    if command_exists node; then
        NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
        if [ "$NODE_VERSION" -lt 18 ]; then
            print_error "Node.js version 18 or higher is required. Current version: $(node --version)"
            exit 1
        fi
        print_success "Node.js version: $(node --version)"
    else
        print_error "Node.js is not installed. Please install Node.js 18 or higher."
        exit 1
    fi
}

# Function to check MySQL
check_mysql() {
    if command_exists mysql; then
        print_success "MySQL is installed"
    else
        print_warning "MySQL is not installed. Please install MySQL 8.0 or higher."
        print_status "You can install MySQL using:"
        echo "  - macOS: brew install mysql"
        echo "  - Ubuntu: sudo apt-get install mysql-server"
        echo "  - Windows: Download from https://dev.mysql.com/downloads/mysql/"
    fi
}

# Function to setup database
setup_database() {
    print_status "Setting up database..."
    
    if ! command_exists mysql; then
        print_warning "MySQL not found. Skipping database setup."
        return
    fi

    read -p "Enter MySQL root password (or press Enter if none): " MYSQL_ROOT_PASSWORD
    read -p "Enter database name [movies-app]: " DB_NAME
    DB_NAME=${DB_NAME:-movies-app}
    
    read -p "Enter database username [movieapp]: " DB_USER
    DB_USER=${DB_USER:-movieapp}
    
    read -p "Enter database password [movieapp123]: " DB_PASSWORD
    DB_PASSWORD=${DB_PASSWORD:-movieapp123}

    # Create database and user
    if [ -z "$MYSQL_ROOT_PASSWORD" ]; then
        mysql -u root -e "CREATE DATABASE IF NOT EXISTS \`$DB_NAME\`;"
        mysql -u root -e "CREATE USER IF NOT EXISTS '$DB_USER'@'localhost' IDENTIFIED BY '$DB_PASSWORD';"
        mysql -u root -e "GRANT ALL PRIVILEGES ON \`$DB_NAME\`.* TO '$DB_USER'@'localhost';"
        mysql -u root -e "FLUSH PRIVILEGES;"
    else
        mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "CREATE DATABASE IF NOT EXISTS \`$DB_NAME\`;"
        mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "CREATE USER IF NOT EXISTS '$DB_USER'@'localhost' IDENTIFIED BY '$DB_PASSWORD';"
        mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "GRANT ALL PRIVILEGES ON \`$DB_NAME\`.* TO '$DB_USER'@'localhost';"
        mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "FLUSH PRIVILEGES;"
    fi

    # Import schema
    if [ -z "$MYSQL_ROOT_PASSWORD" ]; then
        mysql -u root "$DB_NAME" < movies-app.sql
    else
        mysql -u root -p"$MYSQL_ROOT_PASSWORD" "$DB_NAME" < movies-app.sql
    fi

    print_success "Database setup completed!"
}

# Function to setup backend
setup_backend() {
    print_status "Setting up backend..."
    
    cd server
    
    # Install dependencies
    print_status "Installing backend dependencies..."
    npm install
    
    # Create environment file
    if [ ! -f .env ]; then
        print_status "Creating environment file..."
        cp env.example .env
        print_warning "Please edit server/.env with your database credentials"
    else
        print_success "Environment file already exists"
    fi
    
    # Create logs directory
    mkdir -p logs
    
    cd ..
    print_success "Backend setup completed!"
}

# Function to setup frontend
setup_frontend() {
    print_status "Setting up frontend..."
    
    cd front_end
    
    # Install dependencies
    print_status "Installing frontend dependencies..."
    npm install
    
    cd ..
    print_success "Frontend setup completed!"
}

# Function to setup Docker (optional)
setup_docker() {
    if command_exists docker && command_exists docker-compose; then
        print_status "Docker is available. Setting up Docker environment..."
        
        # Create logs directory for Docker
        mkdir -p logs
        
        print_success "Docker setup completed!"
        print_status "You can start the application with: docker-compose up -d"
    else
        print_warning "Docker not found. Skipping Docker setup."
        print_status "To use Docker, install Docker and Docker Compose."
    fi
}

# Function to create development scripts
create_dev_scripts() {
    print_status "Creating development scripts..."
    
    # Create start-dev.sh
    cat > start-dev.sh << 'EOF'
#!/bin/bash

# Start development servers
echo "Starting MovieApp development servers..."

# Start backend
echo "Starting backend server..."
cd server && npm run dev &

# Wait a moment for backend to start
sleep 3

# Start frontend
echo "Starting frontend server..."
cd front_end && npm start &

# Wait for user to stop
echo "Development servers started!"
echo "Backend: http://localhost:3000"
echo "Frontend: http://localhost:4200"
echo "Press Ctrl+C to stop all servers"

# Wait for interrupt
wait
EOF

    # Create stop-dev.sh
    cat > stop-dev.sh << 'EOF'
#!/bin/bash

# Stop development servers
echo "Stopping MovieApp development servers..."

# Kill Node.js processes
pkill -f "ng serve" || true
pkill -f "nodemon" || true
pkill -f "node app.js" || true

echo "Development servers stopped!"
EOF

    # Make scripts executable
    chmod +x start-dev.sh stop-dev.sh
    
    print_success "Development scripts created!"
}

# Function to run tests
run_tests() {
    print_status "Running tests..."
    
    # Backend tests
    cd server
    print_status "Running backend tests..."
    npm test
    cd ..
    
    # Frontend tests
    cd front_end
    print_status "Running frontend tests..."
    npm test -- --watch=false --browsers=ChromeHeadless
    cd ..
    
    print_success "Tests completed!"
}

# Main setup function
main() {
    echo "🎬 MovieApp Setup Script"
    echo "========================"
    echo ""
    
    # Check prerequisites
    print_status "Checking prerequisites..."
    check_node_version
    check_mysql
    
    # Setup database
    read -p "Do you want to setup the database? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        setup_database
    fi
    
    # Setup backend
    print_status "Setting up backend..."
    setup_backend
    
    # Setup frontend
    print_status "Setting up frontend..."
    setup_frontend
    
    # Setup Docker
    read -p "Do you want to setup Docker? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        setup_docker
    fi
    
    # Create development scripts
    create_dev_scripts
    
    # Run tests
    read -p "Do you want to run tests? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        run_tests
    fi
    
    echo ""
    echo "🎉 Setup completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Edit server/.env with your database credentials"
    echo "2. Start development servers: ./start-dev.sh"
    echo "3. Access the application:"
    echo "   - Frontend: http://localhost:4200"
    echo "   - Backend API: http://localhost:3000"
    echo "4. Default admin account:"
    echo "   - Email: admin@gmail.com"
    echo "   - Password: admin123"
    echo ""
    echo "For more information, see README.md"
}

# Run main function
main "$@" 