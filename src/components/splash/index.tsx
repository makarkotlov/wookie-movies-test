import React, { PureComponent } from 'react'
import { StyleSheet, Text } from 'react-native'

import { Icons } from '@constants'
import { FlexContainer } from 'components'

export namespace IconButton {
  export type Name = keyof typeof Icons
}

class Splash extends PureComponent {
  private static renderGlyph(name: IconButton.Name) {
    const glyph = String.fromCharCode(Icons[name])

    return (
      <Text style={styles.glyph}>
        {glyph}
      </Text>
    )
  }

  private renderGlyph(name: IconButton.Name) {
    const { renderGlyph } = this.constructor as typeof Splash

    return renderGlyph(name)
  }

  private renderContent() {
    return this.renderGlyph('rebels')
  }

  render() {
    return (
      <FlexContainer testID="SplashScreen" style={styles.container}>
        {this.renderContent()}
      </FlexContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyph: {
    fontFamily: 'Icons',
    fontSize: 350,
    top: -80,
  },
})

export default Splash
