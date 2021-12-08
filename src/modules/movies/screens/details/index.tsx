import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, ScrollView, StatusBar } from 'react-native'

import { BookmarkButton, MovieDetailsHeader } from './components'
import { Container, Label, List, RowContainer, Spacer } from 'components'

import { Routes } from 'navigator/routes'
import MoviesStore from 'modules/movies/model'
import { HomeStackParamList } from 'navigator/stacks/home/types'
import { computed, makeObservable } from 'mobx'

class Details extends Component<Details.Props> {
  constructor(props: Details.Props) {
    super(props)

    makeObservable<Details, 'movie'>(this, {
      movie: computed,
    })
  }

  private get movie() {
    const { id } = this.props.route.params

    return MoviesStore.moviesById![id]
  }

  private renderHeader = () => {
    const { goBack } = this.props.navigation
    const { title, classification, rating, cover, backdrop } = this.movie!

    const header = `${title} (${classification})`

    return <MovieDetailsHeader onBack={goBack} title={header} backdrop={backdrop} cover={cover} rating={rating} />
  }

  private renderMainInfo = () => {
    const { year, length, director } = this.movie!

    return (
      <RowContainer flexible style={styles.spaceBetween}>
        <Label title={year} fontSize={16} />
        <Label title={'\u00a0|\u00a0'} fontSize={16} />
        <Label title={length} fontSize={16} />
        <Label title={'\u00a0|\u00a0'} fontSize={16} />
        <Label title={director} fontSize={16} />
      </RowContainer>
    )
  }

  private renderCast = () => {
    const { cast } = this.movie!

    return <Label title={`Cast: ${cast}`} fontSize={16} />
  }

  private renderDescription = () => {
    const { description } = this.movie!

    return <Label title={`Movie description: ${description}`} fontSize={16} />
  }

  private onBookmark = () => {
    const { bookmark, deleteBookmark, bookmarked } = this.movie

    if (bookmarked) {
      deleteBookmark()
    } else {
      bookmark()
    }
  }

  private renderContent() {
    if (!this.movie) {
      return null
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false} testID={`DetailsScreen-${this.movie.title}`}>
        {this.renderHeader()}
        <Container>
          <Spacer size="triple" />
          <List separator={Spacer}>
            {this.renderMainInfo()}
            {this.renderCast()}
            {this.renderDescription()}
          </List>
          <Spacer size="triple" />
          <BookmarkButton
            title={this.movie.bookmarked ? 'Delete bookmark' : 'Bookmark'}
            onPress={this.onBookmark}
          />
          <Spacer size="triple" />
        </Container>
      </ScrollView>
    )
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        {this.renderContent()}
      </>
    )
  }
}

export namespace Details {
  export interface Props extends StackScreenProps<HomeStackParamList, Routes.Details> {}
}

const styles = StyleSheet.create({
  spaceBetween: {
    justifyContent: 'space-between',
  },
})

export default observer(Details)
