import React, { PropsWithChildren, memo } from 'react'
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native'

export const FlexContainer = memo<FlexContainer.Props>(({ gravity = 'start', style, ...props }) => {
  const containerStyle = StyleSheet.compose<ViewStyle>(styles[gravity], style)

  return <View style={containerStyle} {...props} />
})

export namespace FlexContainer {
  export interface Props extends PropsWithChildren<ViewProps> {
    gravity?: keyof typeof styles
  }
}

const styles = StyleSheet.create({
  start: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  end: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})
