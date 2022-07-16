/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// import { compilerOptions } from './tsconfig.json';

export default {
  transform: {
    '^.+\\.ts?$': ['esbuild-jest', { sourcemap: true }],
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: ['**/tests/unit/*.(test|spec).ts'],
};
