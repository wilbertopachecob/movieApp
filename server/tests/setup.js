// Test setup file
process.env.NODE_ENV = 'test';
process.env.SECRET_TOKEN = 'test-secret-key-for-jwt-signing';

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Mock database connection for tests
jest.mock('../db/db', () => {
  const mockExecute = jest.fn();
  return {
    execute: mockExecute
  };
}); 