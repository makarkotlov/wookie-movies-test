import React, { memo } from 'react'
import { View, Text, TextProps, TextStyle, ViewProps, ViewStyle, StyleSheet } from 'react-native'

import { useStyle } from 'hooks'

export const Label = memo<Label.Props>(
  ({
    title,
    fontSize = 40,
    color = 'black',
    align: textAlign = 'left',
    flexible = false,
    transform = 'none',
    style,
    numberOfLines,
    ellipsizeMode,
    ...props
  }) => {
    const textTransform = !['none', 'uppercase-first'].includes(transform)
      ? (transform as TextStyle['textTransform'])
      : undefined

    const titleProps = { numberOfLines, ellipsizeMode }

    const titleStyle = useStyle<TextStyle>(
      () => ({
        fontFamily: 'Poppins',
        fontSize,
        color,
        textAlign,
        textTransform,
      }),
      [fontSize, color, textAlign, textTransform]
    )

    const containerStyle = StyleSheet.compose<ViewStyle>(flexible ? styles.flexContainer : undefined, style)

    const transformedTitle = transformers[transform]?.(title) ?? title

    return (
      <View style={containerStyle} {...props}>
        <Text style={titleStyle} {...titleProps}>
          {transformedTitle}
        </Text>
      </View>
    )
  }
)

const transformers: Label.Transformers = {
  'uppercase-first': (item: string) => item.replace(/^(.)/, (match, $1) => $1.toUpperCase()),
}
export namespace Label {
  export interface Props extends ViewProps, Pick<TextProps, 'numberOfLines' | 'ellipsizeMode'> {
    title: string
    fontSize?: number
    color?: string
    align?: Align
    flexible?: boolean
    transform?: Transform
  }

  export type Align = NonNullable<TextStyle['textAlign']>
  export type Transform = 'uppercase-first' | NonNullable<TextStyle['textTransform']>
  export type Transformers = Partial<{ [key in Transform]: (item: string) => string }>
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
})
