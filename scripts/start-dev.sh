#!/bin/bash

# Start development servers for MovieApp
echo "🎬 Starting MovieApp development servers..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
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

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

# Function to cleanup on exit
cleanup() {
    echo ""
    print_status "Stopping development servers..."
    pkill -f "ng serve" 2>/dev/null || true
    pkill -f "nodemon" 2>/dev/null || true
    pkill -f "node app.js" 2>/dev/null || true
    print_success "Development servers stopped!"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Check if dependencies are installed
if [ ! -d "server/node_modules" ]; then
    print_warning "Backend dependencies not found. Installing..."
    cd server && npm install && cd ..
fi

if [ ! -d "frontend/node_modules" ]; then
    print_warning "Frontend dependencies not found. Installing..."
    cd frontend && npm install && cd ..
fi

# Check if .env file exists in server directory
if [ ! -f "server/.env" ]; then
    print_warning "Environment file not found in server directory."
    print_status "Please run ./setup.sh first or create server/.env manually."
    print_status "You can copy from server/env.example"
fi

# Start backend server
print_status "Starting backend server..."
cd server
npm run dev &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Check if backend started successfully
if ! kill -0 $BACKEND_PID 2>/dev/null; then
    print_warning "Backend failed to start. Check server/.env configuration."
fi

# Start frontend server
print_status "Starting frontend server..."
cd frontend
npm start &
FRONTEND_PID=$!
cd ..

# Wait a moment for frontend to start
sleep 5

# Check if frontend started successfully
if ! kill -0 $FRONTEND_PID 2>/dev/null; then
    print_warning "Frontend failed to start."
fi

echo ""
print_success "Development servers started!"
echo ""
echo "🌐 Access the application:"
echo "   Frontend: http://localhost:4200"
echo "   Backend API: http://localhost:3000"
echo ""
echo "📝 Default admin account:"
echo "   Email: admin@gmail.com"
echo "   Password: admin123"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for user to stop
wait 