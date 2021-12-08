import { AxiosInstance } from 'axios'

import { ApiService } from '../services'
import { GetMoviesResponse } from 'modules/movies/model/types'

export class ApiStore {
  private _api?: AxiosInstance

  setApiService({ api }: ApiService) {
    this._api = api
  }

  async getMovies() {
    try {
      const { data } = await this._api!.get<GetMoviesResponse>('movies')

      return data
    } catch (error: unknown) {
      if (__DEV__) {
        console.warn(error)
      }

      throw error
    }
  }

  async searchMovies(name: string) {
    try {
      const { data } = await this._api!.get<GetMoviesResponse>(`movies?q=${name}`)

      return data
    } catch (error: unknown) {
      if (__DEV__) {
        console.warn(error)
      }

      throw error
    }
  }
}
