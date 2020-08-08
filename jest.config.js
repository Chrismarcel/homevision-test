module.exports = {
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ['/node_modules/', '/tests/', '/src/__tests__/assetsTransformer.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/assets/img'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!jest.config.js',
    '!**/coverage/**',
    '!**/tests/**',
    '!**/__tests__/**',
    '!**/index.js',
    '!**/dist/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
