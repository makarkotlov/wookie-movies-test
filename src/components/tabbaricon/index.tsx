import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

import { Glyph } from 'components/glyph'
import { Icons, Layout } from '@constants'

const TabBarIcon = memo<TabBarIcon.Props>(({ iconName, color = 'black' }) => (
  <View style={styles.iconWrapper}>
    <Glyph name={iconName} color={color} size={Layout.button.xs} />
  </View>
))

export namespace TabBarIcon {
  export interface Props {
    iconName: Name
    color?: string
  }

  export type Name = keyof typeof Icons
}

const styles = StyleSheet.create({
  iconWrapper: {
    height: 30,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
})

export default TabBarIcon
