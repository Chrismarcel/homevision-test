module.exports = {
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/App.js',
    '/tests/',
    '/src/__tests__/assetsTransformer.js',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/assets/img'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!jest.config.js',
    '!**/coverage/**',
    '!**/tests/**',
    '!**/__tests__/**',
    '!**/index.js',
    '!**/dist/**',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
}
