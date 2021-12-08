import React, { PropsWithChildren, memo } from 'react'
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native'

export const RowContainer = memo<RowContainer.Props>(({ flexible, style, ...props }) => {
  const containerStyle = StyleSheet.compose<ViewStyle>(
    flexible ? styles.flexibleRowContainer : styles.rowContainer,
    style
  )

  return <View style={containerStyle} {...props} />
})

export namespace RowContainer {
  export interface Props extends PropsWithChildren<ViewProps> {
    flexible?: boolean
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flexibleRowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
