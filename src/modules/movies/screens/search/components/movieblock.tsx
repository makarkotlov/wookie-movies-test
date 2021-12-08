import React, { memo } from 'react'
import { Image, ImageSourcePropType, StyleSheet } from 'react-native'

import { Padding, Radius } from '@constants'
import { Button, FlexContainer, Label } from 'components'

export const MovieBlock = memo<MovieBlock.Props>(({ cover, title, year, ...props }) => {
  return (
    <Button {...props} testID="SearchMovieBlock">
      <Image source={cover} style={styles.image} />
      <FlexContainer style={styles.container}>
        <Label title={title} color="white" fontSize={20} />
        <Label title={year} color="white" fontSize={20} />
      </FlexContainer>
    </Button>
  )
})

export namespace MovieBlock {
  export interface Props extends Button.Props {
    cover: ImageSourcePropType
    title: string
    year: string
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
