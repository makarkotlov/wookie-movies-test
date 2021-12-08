import React, { memo } from 'react'
import { Button } from 'components'
import { Image, View, ImageSourcePropType, StyleSheet } from 'react-native'

export const Movie = memo<Movie.Props>(({ cover, ...props }) => {
  return (
    <Button {...props}>
      <View style={styles.container}>
        <Image source={cover} style={styles.image} />
      </View>
    </Button>
  )
})

export namespace Movie {
  export interface Props extends Button.Props {
    cover: ImageSourcePropType
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
