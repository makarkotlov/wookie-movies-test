import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import FastImage, { Source } from 'react-native-fast-image'

import { Padding, Radius } from '@constants'
import { Button, FlexContainer, Label } from 'components'

export const MovieBlock = memo<MovieBlock.Props>(({ cover, title, year, ...props }) => (
  <Button {...props} testID="SearchMovieBlock">
    <FastImage style={styles.image} source={cover} />
    <FlexContainer style={styles.container}>
      <Label title={title} color="white" fontSize={20} />
      <Label title={year} color="white" fontSize={20} />
    </FlexContainer>
  </Button>
))

export namespace MovieBlock {
  export interface Props extends Button.Props {
    year: string
    title: string
    cover: Source
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: Padding.double,
    backgroundColor: '#0005',
    borderRadius: Radius.sm,
  },
  image: {
    height: 150,
    borderRadius: Radius.sm,
  },
})
