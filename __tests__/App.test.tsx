import React, { ReactNode } from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import Application from '../src/app'

async function sleep() {
  return await new Promise<void>(res => {
    setTimeout(() => {
      res()
    }, 1000)
  })
}

async function changeText(component: ReactNode, text: string) {
  fireEvent(component, 'onChangeText', text)

  /** Compensation for debouncer */
  await sleep()
}

function renderApp() {
  return render(<Application />)
}

describe('Wookie movies', () => {
  it('renders app correctly', async () => {
    const { findByTestId } = renderApp()

    const homeScreen = await findByTestId('HomeScreen')
    expect(homeScreen).toBeTruthy()
  })

  it('renders home screen with movies', async () => {
    const { findAllByTestId } = renderApp()

    const movies = await findAllByTestId('Movie')
    expect(movies.length).toBe(51)
  })

  it('renders movie details screen', async () => {
    const { findByTestId, findAllByTestId } = renderApp()

    /** Go to details screen */
    const movies = await findAllByTestId('Movie')
    fireEvent.press(movies[0])

    /** Check that it's the one we pressed on */
    const detailsScreen = await findByTestId('DetailsScreen-The Dark Knight')
    expect(detailsScreen).toBeTruthy()
  })

  it('renders search screen', async () => {
    const { findByTestId } = renderApp()

    /** Go to the Search screen */
    const button = await findByTestId('SearchTabButton')
    fireEvent.press(button)

    /** Make sure we are on the Search screen */
    const searchScreen = await findByTestId('SearchScreen')
    expect(searchScreen).toBeTruthy()
  })

  it('can switch between bottom tabs', async () => {
    const { findByTestId } = renderApp()

    /** Go to the Search screen */
    const searchTabButton = await findByTestId('SearchTabButton')
    fireEvent.press(searchTabButton)

    /** Make sure we are on the Search screen */
    const searchScreen = await findByTestId('SearchScreen')
    expect(searchScreen).toBeTruthy()

    /** Go to the Home screen */
    const homeTabButton = await findByTestId('HomeTabButton')
    fireEvent.press(homeTabButton)

    /** Make sure we are on the Home screen */
    const homeScreen = await findByTestId('SearchScreen')
    expect(homeScreen).toBeTruthy()
  })

  it('can search movies', async () => {
    const { findByTestId, findAllByTestId, getByPlaceholderText, queryByTestId } = render(<Application />)

    /** Go to the Search screen */
    const button = await findByTestId('SearchTabButton')
    fireEvent.press(button)

    /** Make sure that all movies are rendered */
    const moviesBeforeSearch = await findAllByTestId('SearchMovieBlock')
    expect(moviesBeforeSearch.length).toBe(20)

    /** Locate the text input and write B*/
    const searchInput = await getByPlaceholderText('Find movies')
    expect(searchInput).toBeTruthy()
    await changeText(searchInput, 'B')

    /** Make sure there are no movies found */
    const searchMovieBlock = await queryByTestId('SearchMovieBlock')
    expect(searchMovieBlock).toBeFalsy()

    /** Clear the text input and make sure that all movies are rendered*/
    await changeText(searchInput, '')
    const moviesBeforeSearch1 = await findAllByTestId('SearchMovieBlock')
    expect(moviesBeforeSearch1.length).toBe(20)

    /** Write Batman and make sure there are 2 movies rendered*/
    await changeText(searchInput, 'Batman')
    const moviesAfterSearch2 = await findAllByTestId('SearchMovieBlock')
    expect(moviesAfterSearch2.length).toBe(2)

    /** Go to Details screen and make sure we are on the screen of the movie we pressed on */
    fireEvent.press(moviesAfterSearch2[0])
    const detailsScreen = await findByTestId('DetailsScreen-Batman Begins')
    expect(detailsScreen).toBeTruthy()
  })

  it('can bookmark the movie', async () => {
    const { findByTestId, findByText, findAllByTestId, queryByText } = renderApp()

    /** Go back to home screen */
    const goBack = async () => {
      const backButton = await findByTestId('BackButton')
      expect(backButton).toBeTruthy()
      fireEvent.press(backButton)
    }

    const checkTheAbsenceOfBookmarkedRow = async () => {
      const bookmarkedRow = await queryByText('Bookmarked')
      expect(bookmarkedRow).toBeFalsy()
    }

    const goToDetails = async () => {
      const movies = await findAllByTestId('Movie')
      fireEvent.press(movies[0])
    }

    /** Check the absence of Bookmarked row and go to details screen */
    await checkTheAbsenceOfBookmarkedRow()
    await goToDetails()

    /** Bookmark the movie */
    const bookmarkButtonBeforeBookmarking = await findByText('Bookmark')
    expect(bookmarkButtonBeforeBookmarking).toBeTruthy()
    fireEvent.press(bookmarkButtonBeforeBookmarking)

    await goBack()

    /** Check the presence of the Bookmarked row and go to details screen */
    const bookmarkedRow = await queryByText('Bookmarked')
    expect(bookmarkedRow).toBeTruthy()
    await goToDetails()

    /** Delete bookmark from the movie */
    const bookmarkButtonAfterBookmarking = await findByText('Delete bookmark')
    expect(bookmarkButtonAfterBookmarking).toBeTruthy()
    fireEvent.press(bookmarkButtonAfterBookmarking)

    await goBack()

    await checkTheAbsenceOfBookmarkedRow()
  })
})
