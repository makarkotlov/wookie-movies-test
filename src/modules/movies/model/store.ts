import { makeAutoObservable } from 'mobx'

import { Movie } from '../model'
import { GetMoviesResponse } from './types'
import ExceptionService from 'services/exception'
import { groupByGenre, groupById, makeMovies, MoviesGroupedByGenre, MoviesGroupedById } from './adapters'

export class MoviesStore {
  private _movies: Movie[]
  private _moviesLoading
  private _foundMovies: Movie[] | null
  private _moviesById: MoviesGroupedById | null
  private _moviesByGenre: MoviesGroupedByGenre | null

  private _service?: MoviesStore.Service

  constructor() {
    this._movies = []
    this._foundMovies = null
    this._moviesById = null
    this._moviesLoading = false
    this._moviesByGenre = null

    makeAutoObservable(this)
  }

  get movies() {
    return this._movies
  }

  get bookmarkedMovies() {
    return this._movies.filter(({ bookmarked }) => bookmarked)
  }

  get foundMovies() {
    return this._foundMovies
  }

  get moviesById() {
    return this._moviesById
  }

  get moviesByGenre() {
    return this._moviesByGenre
  }

  get loading() {
    return this._moviesLoading
  }

  private setMovies(movies: Movie[]) {
    this._movies = movies
  }

  private setFoundMovies(movies: Movie[] | null) {
    this._foundMovies = movies
  }

  private setMoviesById(movies: MoviesGroupedById) {
    this._moviesById = movies
  }

  private setMoviesByGenre(movies: MoviesGroupedByGenre) {
    this._moviesByGenre = movies
  }

  private setMoviesLoading(value: boolean) {
    this._moviesLoading = value
  }

  private searchMovies = async (name: string) => {
    try {
      this.setMoviesLoading(true)

      const { movies: moviesResponse } = await this._service!.searchMovies(name)

      const movies = await makeMovies(moviesResponse)

      this.setFoundMovies(movies)
    } catch (error: unknown) {
      if (__DEV__) {
        ExceptionService.handleWarning('MoviesStore.searchMovies', error)
      }

      throw error
    } finally {
      this.setMoviesLoading(false)
    }
  }

  setService(service: MoviesStore.Service) {
    this._service = service
  }

  fetchMovies = async () => {
    try {
      this.setMoviesLoading(true)

      const { movies: moviesResponse } = await this._service!.getMovies()

      const movies = await makeMovies(moviesResponse)

      this.setMovies(movies)
      this.setMoviesById(groupById(movies))
      this.setMoviesByGenre(groupByGenre(movies))
    } catch (error: unknown) {
      if (__DEV__) {
        ExceptionService.handleWarning('MoviesStore.fetchMovies', error)
      }

      throw error
    } finally {
      this.setMoviesLoading(false)
    }
  }

  findMovie = (name?: string) => {
    if (!name) {
      this.setFoundMovies(null)
      return
    }

    this.searchMovies(name)
  }
}

export namespace MoviesStore {
  export interface Service {
    getMovies: () => Promise<GetMoviesResponse>
    searchMovies: (name: string) => Promise<GetMoviesResponse>
  }
}
