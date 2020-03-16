module.exports = {
  automock: false,
  cacheDirectory: '<rootDir>/.jest',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 88,
      lines: 88,
      statements: 88,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/typings/', '/scripts/', '/dist/'],
  testRegex: '\\.test\\.ts$',
  testTimeout: 15000,
  globals: {
    'ts-jest': { isolatedModules: true },
  },
};
