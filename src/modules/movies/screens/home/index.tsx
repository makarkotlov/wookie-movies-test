import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { ScrollView, StyleSheet } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'

import { Movie as MovieComponent } from './components'
import { Container, FlexContainer, Label, List, Spacer } from 'components'

import { Padding } from '@constants'
import { Routes } from 'navigator/routes'
import ExceptionService from 'services/exception'
import { Genre } from 'modules/movies/model/types'
import MoviesStore, { Movie } from 'modules/movies/model'
import { HomeStackParamList } from 'navigator/stacks/home/types'

class Home extends Component<Home.Props> {
  private static _title = 'Wookie\nMovies'
  private static _edges: Edge[] = ['top', 'left', 'right']

  private get edges() {
    const { _edges } = this.constructor as typeof Home

    return _edges
  }

  private get title() {
    const { _title } = this.constructor as typeof Home

    return _title
  }

  private onPress = (id: string) => {
    const { navigate } = this.props.navigation

    navigate(Routes.Details, { id })
  }

  private renderMovie = ({ cover: uri, id }: Movie) => (
    <MovieComponent
      key={id}
      payload={id}
      cover={{ uri }}
      onPress={this.onPress}
    />
  )

  private renderRow(title: string, movies: Movie[], key: number | string) {
    if (!movies.length) {
      return null
    }

    return (
      <FlexContainer key={key}>
        <Container>
          <Label title={title} fontSize={25} />
        </Container>
        <Spacer size="double" />
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          <List separator={Spacer}>
            {movies.map(this.renderMovie)}
          </List>
        </ScrollView>
      </FlexContainer>
    )
  }

  private renderContent() {
    const { moviesByGenre, bookmarkedMovies } = MoviesStore

    if (!moviesByGenre) {
      return null
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer size="triple" />
        <Container>
          <Label title={this.title} transform="uppercase" align="center" />
        </Container>
        <Spacer size="double" />
        <List separator={Spacer}>
          {this.renderRow('Bookmarked', bookmarkedMovies, 'Bookmarked')}
          {(Object.keys(moviesByGenre) as Genre[]).map((genre, i) =>
            this.renderRow(genre, moviesByGenre[genre], i))}
        </List>
        <Spacer size="sex" />
      </ScrollView>
    )
  }

  private fetchMovies = async () => {
    try {
      const { fetchMovies } = MoviesStore

      await fetchMovies()
    } catch (error) {
      ExceptionService.showAlert('Home.fetchMovies', error)
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  render() {
    return (
      <SafeAreaView edges={this.edges} style={styles.flex} testID="HomeScreen">
        {this.renderContent()}
      </SafeAreaView>
    )
  }
}

export namespace Home {
  export interface Props extends StackScreenProps<HomeStackParamList, Routes.Home> {}
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: Padding.sex,
  },
})

export default observer(Home)
