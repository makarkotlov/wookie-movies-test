import React, { memo } from 'react'
import { StyleSheet } from 'react-native'

import { Glyph } from 'components/glyph'
import { Padding, Radius } from '@constants'
import { Button, Label, RowContainer, Spacer } from 'components'

export const BookmarkButton = memo<BookmarkButton.Props>(({ title, ...props }) => (
  <Button {...props} testID="BookmarkButton">
    <RowContainer flexible style={styles.container}>
      <Glyph name="bookmark" />
      <Spacer size="double" />
      <Label title={title} fontSize={16} />
    </RowContainer>
  </Button>
))

export namespace BookmarkButton {
  export interface Props extends Button.Props {
    title: string
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: Padding.double,
    borderRadius: Radius.sm,
  },
})
