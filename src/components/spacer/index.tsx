import React, { FunctionComponent, memo } from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'

import { Padding } from '@constants'

export const Spacer: FunctionComponent<Spacer.Props> = memo(({ size = 'triple', ...props }) => (
  <View style={styles[size]} {...props} />
))

export namespace Spacer {
  export interface Props extends ViewProps {
    size?: Size
  }

  export type Size = 'sex' | 'quint' | 'quad' | 'triple' | 'double' | 'single' | 'flex'
}

const styles = StyleSheet.create({
  sex: {
    minWidth: Padding.sex,
    minHeight: Padding.sex,
  },

  quint: {
    minWidth: Padding.quint,
    minHeight: Padding.quint,
  },

  quad: {
    minWidth: Padding.quad,
    minHeight: Padding.quad,
  },

  triple: {
    minWidth: Padding.triple,
    minHeight: Padding.triple,
  },

  double: {
    minWidth: Padding.double,
    minHeight: Padding.double,
  },

  single: {
    minWidth: Padding.single,
    minHeight: Padding.single,
  },

  flex: {
    flex: 1,
  },
})
