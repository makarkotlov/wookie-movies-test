import React, { PureComponent } from 'react'
import { StyleSheet, Text } from 'react-native'

import { Icons, Layout } from '@constants'

export class Glyph extends PureComponent<Glyph.Props> {
  static defaultProps = {
    color: 'black',
  }

  private static renderGlyph(name: Glyph.Name) {
    const glyph = String.fromCharCode(Icons[name])

    return (
      <Text style={styles.glyph}>
        {glyph}
      </Text>
    )
  }

  get fontSize() {
    const { size, iconSize } = this.props

    if (typeof iconSize === 'number') {
      return iconSize
    }

    switch (size) {
      case 'inline':
        return Layout.button.xxs

      default:
        return Layout.button.xs
    }
  }

  get foregroundStyle() {
    const { fontSize } = this
    const { color } = this.props

    return { opacity: 1, color, fontSize, includeFontPadding: false }
  }

  private renderGlyph(name: Glyph.Name) {
    const { renderGlyph } = this.constructor as typeof Glyph

    return renderGlyph(name)
  }

  render() {
    const { name } = this.props

    return (
      <Text style={this.foregroundStyle}>
        {this.renderGlyph(name)}
      </Text>
    )
  }
}

export namespace Glyph {
  export interface Props {
    name: Name
    color?: string
    iconSize?: number
    size?: 'inline' | string | number
  }

  export type Name = keyof typeof Icons
}

const styles = StyleSheet.create({
  glyph: {
    fontFamily: 'Icons',
  },
})
