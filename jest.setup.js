import { jest } from '@jest/globals';

// Make Jest globals available
global.jest = jest;
global.describe = describe;
global.test = test;
global.expect = expect;
global.beforeEach = beforeEach;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
class IntersectionObserver {
  // Empty methods required for mock implementation
  observe() {} // eslint-disable-line no-empty-function
  unobserve() {} // eslint-disable-line no-empty-function
  disconnect() {} // eslint-disable-line no-empty-function
}
window.IntersectionObserver = IntersectionObserver; 