import { makeAutoObservable } from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Genre } from './types'

export class Movie implements Movie.Data {
  private readonly _id: string
  private readonly _slug: string
  private readonly _year: string
  private readonly _title: string
  private readonly _cover: string
  private readonly _cast: string[]
  private readonly _length: string
  private readonly _rating: number
  private readonly _genres: Genre[]
  private readonly _backdrop: string
  private readonly _director: string
  private readonly _yearShort: string
  private readonly _description: string
  private readonly _classification: string

  private _bookmarked: boolean

  constructor({
    id,
    cast,
    slug,
    year,
    title,
    cover,
    length,
    rating,
    genres,
    backdrop,
    director,
    yearShort,
    bookmarked,
    description,
    classification,
  }: Movie.Data) {
    this._id = id
    this._cast = cast
    this._slug = slug
    this._year = year
    this._title = title
    this._cover = cover
    this._rating = rating
    this._length = length
    this._genres = genres
    this._backdrop = backdrop
    this._director = director
    this._yearShort = yearShort
    this._bookmarked = bookmarked
    this._description = description
    this._classification = classification

    makeAutoObservable(this)
  }

  get id() {
    return this._id
  }

  get cast() {
    return this._cast
  }

  get slug() {
    return this._slug
  }

  get title() {
    return this._title
  }

  get cover() {
    return this._cover
  }

  get length() {
    return this._length
  }

  get genres() {
    return this._genres
  }

  get description() {
    return this._description
  }

  get backdrop() {
    return this._backdrop
  }

  get director() {
    return this._director
  }

  get rating() {
    return this._rating
  }

  get year() {
    return this._year
  }

  get yearShort() {
    return this._yearShort
  }

  get bookmarked() {
    return this._bookmarked
  }

  get classification() {
    return this._classification
  }

  private setBookmarked = (value: boolean) => {
    this._bookmarked = value
  }

  bookmark = async () => {
    await AsyncStorage.setItem(this.id, 'bookmarked')
    this.setBookmarked(true)
  }

  deleteBookmark = async () => {
    await AsyncStorage.removeItem(this.id)
    this.setBookmarked(false)
  }
}

export namespace Movie {
  export interface Data {
    id: string
    slug: string
    year: string
    title: string
    cover: string
    cast: string[]
    rating: number
    length: string
    genres: Genre[]
    backdrop: string
    director: string
    yearShort: string
    bookmarked: boolean
    description: string
    classification: string
  }
}
