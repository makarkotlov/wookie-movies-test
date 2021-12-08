/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/naming-convention */
import 'promise.allsettled/auto';
import 'react-native-gesture-handler/jestSetup'
import { NativeModules } from 'react-native'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

import { MockMovies } from './__mocks__'

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve()),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
}

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(url => {
      if (url === 'movies') {
        return Promise.resolve({
          data: MockMovies,
        })
      }

      if (url === 'movies?q=B') {
        return Promise.resolve({
          data: { movies: [] },
        })
      }

      if (url === 'movies?q=Batman') {
        return Promise.resolve({
          data: {
            movies: [
              MockMovies.movies.find(({ title }) => title === 'Batman Begins'),
              MockMovies.movies.find(({ title }) => title === 'The Dark Knight'),
            ],
          },
        })
      }
    }),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  })),
}))

jest.mock('react-native-config', () => ({
  API_URL: 'MOCK_URL',
  API_KEY: 'MOCK_KEY',
}))
