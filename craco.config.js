/** @format */

const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@project': path.resolve(__dirname, 'src')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '@project/(.*)$': '<rootDir>/src/$1'
      },
      setupFilesAfterEnv: ['<rootDir>/src/utils/test/setupTests.ts']
    }
  }
};
