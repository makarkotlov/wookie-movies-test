import React, { memo } from 'react'
import { Button } from 'components'
import { View, StyleSheet } from 'react-native'
import FastImage, { Source } from 'react-native-fast-image'

export const Movie = memo<Movie.Props>(({ cover, ...props }) => (
  <Button {...props}>
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
    resizeMode: 'contain',
    flex: 1,
  },
})
