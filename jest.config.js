const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|tsx?|ts?)$'

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: TEST_REGEX,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transform-stub',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  },
}
