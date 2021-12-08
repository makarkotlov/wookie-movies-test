import React, { PropsWithChildren, memo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native'

import { useStyle } from 'hooks'
import { Padding } from '@constants'

export const Container = memo<Container.Props>(({ margins = 'sex', style, ...props }) => {
  const { right, left } = useSafeAreaInsets()

  const computedStyle = useStyle<ViewStyle>(
    () => ({
      paddingLeft: Math.max(left, Padding[margins]),
      paddingRight: Math.max(right, Padding[margins]),
    }),
    [left, right, margins]
  )

  const containerStyle = StyleSheet.compose<ViewStyle>(computedStyle, style)

  return <View style={containerStyle} {...props} />
})

export namespace Container {
  export interface Props extends PropsWithChildren<ViewProps> {
    margins?: Margins
  }

  export type Margins = 'double' | 'triple' | 'sex'
}
