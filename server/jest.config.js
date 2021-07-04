/* eslint-disable no-undef */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // https://stackoverflow.com/a/59269961
  testTimeout: 5000,
  // https://stackoverflow.com/questions/50992518
  // collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/server.ts',
    '!src/routes.ts',
    '!src/lib/mongoHelper.ts',
  ]
};
