import type { Config } from '@jest/types'

const jestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '<rootDir>/../jest.setup.ts'
  ]
}

export default jestConfig
