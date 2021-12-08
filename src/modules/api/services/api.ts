/* eslint-disable @typescript-eslint/naming-convention */
import { Platform } from 'react-native'
import Config from 'react-native-config'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import ExceptionService from 'services/exception'

export class ApiService {
  private static headers = {
    'User-Agent': `WookieMovies${Platform.OS}`,
    'Content-Type': 'application/json',
  }

  private get headers() {
    const { headers } = this.constructor as typeof ApiService

    return headers
  }

  api

  constructor() {
    this.api = axios.create({
      baseURL: Config.API_URL,
      headers: this.headers,
    })

    this.initInterceptors()
  }

  private initInterceptors() {
    this.initBaseApiInterceptors()
  }

  private initBaseApiInterceptors() {
    this.api.interceptors.request.use(this.onRequest, exception => {
      ExceptionService.handleWarning('ApiService.api.interceptors.request', exception)
      return Promise.reject(exception)
    })

    this.api.interceptors.response.use(this.onResponse, exception => () => {
      ExceptionService.handleWarning('ApiService.api.interceptors.response', exception)
      return Promise.reject(exception)
    })
  }

  private onResponse(response: AxiosResponse) {
    return Promise.resolve(response)
  }

  private async onRequest(request: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    try {
      request.headers!.Authorization = Config.API_KEY

      return request
    } catch (exception: unknown) {
      ExceptionService.handleError('ApiService.onRequest', exception as AxiosError)
      return request
    }
  }
}

export namespace ApiService {}
