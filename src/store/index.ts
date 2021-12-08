import { makeAutoObservable } from 'mobx'

import ApiStore from 'modules/api/model'
import ApiService from 'modules/api/services'
import MoviesStore from 'modules/movies/model'

class AppStore {
  private _initialized

  constructor() {
    this._initialized = false

    makeAutoObservable(this)
  }

  get initialized() {
    return this._initialized
  }

  private setInitialized(value: boolean) {
    this._initialized = value
  }

  initialize = async () => {
    try {
      /**
       * Initialize app here
       */

      ApiStore.setApiService(ApiService)
      MoviesStore.setService(ApiStore)

      this.setInitialized(true)
    } catch (error) {
      if (__DEV__) {
        console.warn('AppStore error!', error)
      }

      throw error
    }
  }
}

export default new AppStore()
