import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import FastImage, { Source } from 'react-native-fast-image'

import { Button } from 'components'

export const Movie = memo<Movie.Props>(({ cover, ...props }) => (
  <Button {...props} testID="Movie">
    <View style={styles.container}>
      <FastImage style={styles.image} source={cover} />
    </View>
  </Button>
))

export namespace Movie {
  export interface Props extends Button.Props {
    cover: Source
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    minHeight: 150,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
})
