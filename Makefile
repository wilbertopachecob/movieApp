# MovieApp Makefile
# Provides convenient commands for development

.PHONY: help dev stop setup install build test lint clean docker-build docker-up docker-down

# Default target
help:
	@echo "🎬 MovieApp Development Commands"
	@echo "================================"
	@echo ""
	@echo "Development:"
	@echo "  make dev          Start development servers"
	@echo "  make stop         Stop development servers"
	@echo "  make setup        Run initial setup"
	@echo ""
	@echo "Installation:"
	@echo "  make install      Install all dependencies"
	@echo ""
	@echo "Building:"
	@echo "  make build        Build frontend for production"
	@echo ""
	@echo "Testing:"
	@echo "  make test         Run all tests"
	@echo "  make test-backend Run backend tests only"
	@echo "  make test-frontend Run frontend tests only"
	@echo ""
	@echo "Code Quality:"
	@echo "  make lint         Run linting on all code"
	@echo "  make lint-fix     Fix linting issues"
	@echo ""
	@echo "Docker:"
	@echo "  make docker-build Build Docker images"
	@echo "  make docker-up    Start Docker containers"
	@echo "  make docker-down  Stop Docker containers"
	@echo ""
	@echo "Cleanup:"
	@echo "  make clean        Clean build artifacts"

# Development commands
dev:
	@echo "🚀 Starting development servers..."
	./scripts/start-dev.sh

stop:
	@echo "🛑 Stopping development servers..."
	./scripts/stop-dev.sh

setup:
	@echo "⚙️  Running setup..."
	./scripts/setup.sh

# Installation
install:
	@echo "📦 Installing dependencies..."
	npm run install:all

# Building
build:
	@echo "🔨 Building frontend..."
	npm run build

# Testing
test:
	@echo "🧪 Running all tests..."
	npm run test

test-backend:
	@echo "🧪 Running backend tests..."
	npm run test:backend

test-frontend:
	@echo "🧪 Running frontend tests..."
	npm run test:frontend

# Code Quality
lint:
	@echo "🔍 Running linting..."
	npm run lint

lint-fix:
	@echo "🔧 Fixing linting issues..."
	npm run lint:fix

# Docker commands
docker-build:
	@echo "🐳 Building Docker images..."
	cd deployment && docker-compose build

docker-up:
	@echo "🐳 Starting Docker containers..."
	cd deployment && docker-compose up -d

docker-down:
	@echo "🐳 Stopping Docker containers..."
	cd deployment && docker-compose down

# Cleanup
clean:
	@echo "🧹 Cleaning build artifacts..."
	rm -rf frontend/dist
	rm -rf frontend/.angular
	rm -rf server/public
	rm -rf node_modules
	rm -rf frontend/node_modules
	rm -rf server/node_modules
	@echo "✅ Cleanup complete!" 