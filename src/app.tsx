import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppStore from 'store'
import Navigator from 'navigator'
import ExceptionService from 'services/exception'

class Application extends PureComponent {
  private static async initialize() {
    try {
      await AppStore.initialize()
    } catch (error) {
      ExceptionService.handleError('Application.initialize ERROR', error)
    }
  }

  private initialize() {
    const { initialize } = this.constructor as typeof Application

    return initialize()
  }

  componentDidMount() {
    this.initialize()
  }

  render() {
    return (
      /** FIXME: initialSafeAreaInsets needed for tests to work */
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Navigator />
      </SafeAreaProvider>
    )
  }
}

export default Application
