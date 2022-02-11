import { format } from 'date-fns'
import { camelizeKeys } from 'humps'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Movie } from './movie'
import { getFulfilled } from '../utils'
import { Genre, Movie as IMovie, MovieCamelized } from './types'

export type MoviesGroupedByGenre = {
  [key in Genre]: Movie[]
}

export type MoviesGroupedById = {
  [key: Movie['id']]: Movie
}

export function groupById(movies: Movie[]) {
  let moviesById = {} as MoviesGroupedById

  for (const movie of movies) {
    moviesById[movie.id] = movie
  }

  return moviesById
}

export function groupByGenre(movies: Movie[]) {
  let moviesByGenre = {} as MoviesGroupedByGenre

  for (const movie of movies) {
    for (const genre of movie.genres) {
      if (moviesByGenre[genre]?.length) {
        moviesByGenre[genre].push(movie)
      } else {
        moviesByGenre[genre] = [movie]
      }
    }
  }

  return moviesByGenre
}

export async function makeMovie(props: IMovie): Promise<Movie> {
  const { id, releasedOn, overview, imdbRating, poster, ...rest } = camelizeKeys(props) as MovieCamelized

  const releaseDate = new Date(releasedOn)

  const bookmarked = await AsyncStorage.getItem(id)

  return new Movie({
    ...rest,
    id,
    cover: poster,
    rating: imdbRating,
    description: overview,
    bookmarked: !!bookmarked,
    year: format(releaseDate, 'P'),
    yearShort: format(releaseDate, 'yyyy'),
  })
}

export async function makeMovies(movies: IMovie[] = []): Promise<Movie[]> {
  const promises = await Promise.allSettled(movies.map(makeMovie))

  return getFulfilled(promises)
    .filter(({ value }) => value instanceof Movie)
    .map(({ value }) => value)
}
