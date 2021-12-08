import React, { PureComponent } from 'react'
import { observer } from 'mobx-react'
import { StackScreenProps } from '@react-navigation/stack'
import { ScrollView, StyleSheet, TextInput } from 'react-native'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'

import { MovieBlock } from './components'
import { Routes } from 'navigator/routes'
import { Padding, Radius } from '@constants'
import MoviesStore, { Movie } from 'modules/movies/model'
import { Container, Label, List, Spacer } from 'components'
import { SearchStackParamList } from 'navigator/stacks/search/types'

class Search extends PureComponent<Search.Props> {
  private static _debounceTime = 800
  private static _edges: Edge[] = ['top', 'left', 'right']

  private _debouncer?: NodeJS.Timeout

  private get edges() {
    const { _edges } = this.constructor as typeof Search

    return _edges
  }

  private get debounceTime() {
    const { _debounceTime } = this.constructor as typeof Search

    return _debounceTime
  }

  private onPress = (id: string) => () => {
    const { navigate } = this.props.navigation

    navigate(Routes.Details, { id })
  }

  private onSearch = (name: string) => {
    const { findMovie } = MoviesStore

    if (this._debouncer) {
      clearTimeout(this._debouncer)
    }

    this._debouncer = setTimeout(() => {
      findMovie(name)
    }, this.debounceTime)
  }

  private renderMovie = ({ cover: uri, id, title, yearShort }: Movie, i: number) => (
    <MovieBlock year={yearShort} title={title} key={i} onPress={this.onPress(id)} cover={{ uri }} />
  )

  private renderContent() {
    const { movies, foundMovies } = MoviesStore

    const flicks = foundMovies || movies

    return (
      <>
        <Container>
          <Spacer size="sex" />
          <TextInput
            selectionColor="#9F6126"
            placeholder="Find movies"
            placeholderTextColor="grey"
            style={styles.searchInput}
            onChangeText={this.onSearch}
          />
          <Spacer size="sex" />
        </Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <List separator={Spacer}>
              {flicks.length ? flicks.map(this.renderMovie) : <Label title="No movies found" fontSize={20} />}
            </List>
            <Spacer size="sex" />
          </Container>
        </ScrollView>
      </>
    )
  }

  render() {
    return (
      <SafeAreaView edges={this.edges} style={styles.flex} testID="SearchScreen">
        {this.renderContent()}
      </SafeAreaView>
    )
  }
}

export namespace Search {
  export interface Props extends StackScreenProps<SearchStackParamList, Routes.Search> {}
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  searchInput: {
    paddingVertical: Padding.double,
    paddingHorizontal: Padding.triple,
    borderRadius: Radius.sm,
    borderWidth: 1,
  },
})

export default observer(Search)
