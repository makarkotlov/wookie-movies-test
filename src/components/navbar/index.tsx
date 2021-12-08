import React, { memo, ReactNode } from 'react'
import { StyleSheet, View, ViewStyle, Text } from 'react-native'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'

import { NavigationItem } from './components'

const edges: Edge[] = ['top', 'right', 'left']

export const NavigationBar = memo<NavigationBar.Props>(
  ({ title, caption, style, leftView, rightView, centerNode }) => (
    <SafeAreaView edges={edges}>
      <View style={[styles.root, style]}>
        {!!leftView && <NavigationItem {...leftView} />}
        <View style={styles.centerView}>
          {centerNode ?? (
            <>
              <Text style={[styles.text, styles.title]} numberOfLines={1}>
                {title}
              </Text>
              {Boolean(caption) && (
                <Text style={styles.text} numberOfLines={1}>
                  {caption}
                </Text>
              )}
            </>
          )}
        </View>
        {!!rightView && <NavigationItem {...rightView} />}
      </View>
    </SafeAreaView>
  )
)

export namespace NavigationBar {
  export interface Props {
    title?: string
    caption?: string
    style?: ViewStyle
    centerNode?: ReactNode
    withSafeAreaPadding?: boolean
    leftView?: NavigationItem.Props
    rightView?: NavigationItem.Props
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderBottomColor: 'silver',
    borderBottomWidth: 0.5,
    height: 50,
    paddingTop: 0,
    flexDirection: 'row',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  title: {
    lineHeight: 20,
  },
})

export * from './components'
