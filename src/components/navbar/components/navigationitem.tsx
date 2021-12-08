import React, { ReactNode } from 'react'
import { View, TouchableOpacity, GestureResponderEvent, StyleSheet } from 'react-native'

const iconSize = 24
const headerHeight = 5 * 10

export const NavigationItem = ({ node, isDisabled = false, onPress, ...rest }: NavigationItem.Props) => (
  <TouchableOpacity onPress={onPress} disabled={isDisabled} {...rest}>
    <View style={styles.sideView}>
      {node}
    </View>
  </TouchableOpacity>
)

export namespace NavigationItem {
  export interface Props {
    node: ReactNode
    onPress: (e: GestureResponderEvent) => void
    isDisabled?: boolean
  }
}

const styles = StyleSheet.create({
  sideView: {
    height: headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: iconSize,
    marginHorizontal: 15,
  },
})
