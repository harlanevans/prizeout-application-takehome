module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFiles: ['<rootDir>/src/testing/.jest/jestEnv.js'],
    transform: {
      '^.+\\.(ts|tsx)?$': 'babel-jest',
      ".+\\.(less|css)$": "jest-css-modules-transform"
    },
    verbose: true
  };