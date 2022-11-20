const nextJest = require('next/jest')
const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|tsx?|ts?)$'


const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: TEST_REGEX,
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
}

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})(customJestConfig)


module.exports = async () => {
  const jestConfig = await createJestConfig()
  const moduleNameMapper = {
    ...jestConfig.moduleNameMapper,
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@containers/(.*)$': '<rootDir>/src/containers/$1',
    '^@common/(.*)$': '<rootDir>/src/common/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
  }
  return {
    ...jestConfig,
    moduleNameMapper
  }
}
