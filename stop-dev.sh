#!/bin/bash

# Stop development servers for MovieApp
echo "🛑 Stopping MovieApp development servers..."

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

# Function to kill processes by pattern
kill_processes() {
    local pattern=$1
    local process_name=$2
    
    # Find and kill processes
    local pids=$(pgrep -f "$pattern" 2>/dev/null || true)
    
    if [ -n "$pids" ]; then
        print_status "Stopping $process_name..."
        echo "$pids" | xargs kill -TERM 2>/dev/null || true
        
        # Wait a moment and force kill if still running
        sleep 2
        local remaining_pids=$(pgrep -f "$pattern" 2>/dev/null || true)
        if [ -n "$remaining_pids" ]; then
            print_warning "Force stopping $process_name..."
            echo "$remaining_pids" | xargs kill -KILL 2>/dev/null || true
        fi
        
        print_success "$process_name stopped"
    else
        print_status "$process_name is not running"
    fi
}

# Stop Angular development server
kill_processes "ng serve" "Frontend (Angular)"

# Stop Node.js backend server
kill_processes "nodemon" "Backend (Nodemon)"
kill_processes "node app.js" "Backend (Node.js)"

# Additional cleanup for any remaining Node.js processes on the ports
print_status "Cleaning up port usage..."

# Kill processes on port 3000 (backend)
backend_pid=$(lsof -ti:3000 2>/dev/null || true)
if [ -n "$backend_pid" ]; then
    print_status "Stopping process on port 3000..."
    echo "$backend_pid" | xargs kill -TERM 2>/dev/null || true
fi

# Kill processes on port 4200 (frontend)
frontend_pid=$(lsof -ti:4200 2>/dev/null || true)
if [ -n "$frontend_pid" ]; then
    print_status "Stopping process on port 4200..."
    echo "$frontend_pid" | xargs kill -TERM 2>/dev/null || true
fi

echo ""
print_success "All development servers stopped!"
echo ""
echo "✅ Ports 3000 and 4200 are now available"
echo "🔄 You can restart servers with: ./start-dev.sh" 