module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    // '^@/(.*)$': '<rootDir>/src/$1'
    // '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  // moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'vue', 'json'],
  moduleDirectories: ['node_modules'],
  transform: {
    // '^.+\\.js$': 'babel-jest',
    '^.+\\.js$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  // #01
  verbose: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  // #02
  // collectCoverage: true,
  // collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue'],
  // transformIgnorePatterns: ['/node_modules/(?!@babel/runtime-corejs2)'],
}
