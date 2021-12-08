/* eslint-disable @typescript-eslint/naming-convention */
import React, { memo } from 'react'
import Star from 'react-native-star-view'
import { HeaderBackButton } from '@react-navigation/elements'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native'

import { useStyle } from 'hooks'
import { Padding } from '@constants'
import { FlexContainer, Label, RowContainer, Spacer } from 'components'

const BACKDROP_HEIGHT = 200
const MOVIE_POSTER_WIDTH = 100
const MOVIE_POSTER_HEIGHT = 150

const OFFSET_COMPENSATION = 3

export const MovieDetailsHeader = memo<MovieDetailsHeader.Props>(({ backdrop, cover, title, rating, onBack }) => {
  const { top: topInset } = useSafeAreaInsets()

  const containerStyle = useStyle<ViewStyle>(
    () => ({
      minHeight: topInset + BACKDROP_HEIGHT + MOVIE_POSTER_HEIGHT / 2 + OFFSET_COMPENSATION,
    }),
    [topInset]
  )

  const backButtonStyle = useStyle<ViewStyle>(
    () => ({
      zIndex: 1,
      top: topInset,
      position: 'absolute',
      paddingLeft: Padding.quad,
    }),
    [topInset]
  )

  const backdropStyle = useStyle<ImageStyle>(
    () => ({
      flex: 1,
      maxHeight: topInset + BACKDROP_HEIGHT,
    }),
    [topInset]
  )

  const detailsStyle = useStyle<ImageStyle>(
    () => ({
      width: '100%',
      position: 'absolute',
      paddingHorizontal: Padding.sex,
      top: topInset + BACKDROP_HEIGHT - MOVIE_POSTER_HEIGHT / 2,
    }),
    [topInset]
  )

  return (
    <FlexContainer style={containerStyle}>
      <HeaderBackButton onPress={onBack} style={backButtonStyle} tintColor="white" testID="BackButton" />
      <Image source={{ uri: backdrop }} style={backdropStyle} />
      <RowContainer style={detailsStyle}>
        <Image source={{ uri: cover }} style={styles.image} />
        <Spacer size="triple" />
        <View style={styles.block}>
          <View style={styles.titleContainer}>
            <Label title={title} color="white" fontSize={20} />
            <Spacer size="triple" />
          </View>
          <View style={styles.block2}>
            <Star score={rating / 2} style={styles.star} />
          </View>
        </View>
      </RowContainer>
    </FlexContainer>
  )
})

export namespace MovieDetailsHeader {
  export interface Props {
    cover: string
    title: string
    rating: number
    backdrop: string
    onBack: () => void
  }
}

const styles = StyleSheet.create({
  block: {
    height: '100%',
  },
  block2: {
    height: '50%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    height: '50%',
    justifyContent: 'flex-end',
  },
  image: {
    width: MOVIE_POSTER_WIDTH,
    height: MOVIE_POSTER_HEIGHT,
  },
  star: {
    width: 150,
    height: 30,
  },
})
