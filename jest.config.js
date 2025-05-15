/**
 * Jest configuration for ES modules
 */
export default {
  transform: {},
  // We don't need to specify extensionsToTreatAsEsm since .js is inferred based on package.json type
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 70,
      lines: 80,
      statements: 80
    }
  }
};
