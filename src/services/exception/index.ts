import NetInfo from '@react-native-community/netinfo'

class ExceptionService {
  handleError(where = '', exception: Error) {
    if (__DEV__) {
      console.error(where, exception)
    } else {
      console.error(where, exception)
    }
  }

  async showAlert(where = '', exception: Error) {
    const { isInternetReachable, isConnected } = await NetInfo.fetch()

    if (!isConnected) {
      /** TODO */
      return
    }

    if (!isInternetReachable) {
      /** TODO */

      return
    }

    /** TODO  */

    if (__DEV__) {
      console.warn(where, exception)
    }
  }

  handleWarning(where = '', exception?: Error | null) {
    if (__DEV__) {
      console.warn(where, exception)
    }
  }
}

export default new ExceptionService()
