export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': ['babel-jest', { configFile: './.babelrc' }]
  },
  moduleFileExtensions: ['js', 'json'],
  testMatch: ['**/*.test.js'],
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@jest/globals)/)'
  ],
  globals: {
    jest: true,
    describe: true,
    test: true,
    expect: true,
    beforeEach: true
  }
}; 