/* eslint-disable @typescript-eslint/naming-convention */

// FIXME: get rid of enums
export enum Genre {
  War = 'War',
  Crime = 'Crime',
  Drama = 'Drama',
  Action = 'Action',
  Family = 'Family',
  History = 'History',
  'Sci-Fi' = 'Sci-Fi',
  Romance = 'Romance',
  Mystery = 'Mystery',
  Thriller = 'Thriller',
  Biography = 'Biography',
  Animation = 'Animation',
  Adventure = 'Adventure',
}

export interface Movie {
  id: string
  cast: string[]
  slug: string
  title: string
  poster: string
  length: string
  genres: Genre[]
  overview: string
  backdrop: string
  director: string
  imdb_rating: number
  released_on: string
  classification: string
}

export interface MovieCamelized {
  id: string
  cast: string[]
  slug: string
  title: string
  poster: string
  length: string
  genres: Genre[]
  overview: string
  backdrop: string
  director: string
  imdbRating: number
  releasedOn: string
  classification: string
}

export interface GetMoviesResponse {
  movies: Movie[]
}
