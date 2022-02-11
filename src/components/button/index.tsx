import React, { PureComponent } from 'react'
import {
  Platform,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from 'react-native'

import { FlexContainer } from 'components'

export class Button extends PureComponent<Button.Props> {
  private onPress = () => {
    const { onPress, payload } = this.props

    onPress?.(payload)
  }

  render() {
    const { children, onPress, ...props } = this.props

    return (
      Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={this.onPress} {...props}>
            {children}
          </TouchableOpacity>
        ),
        android: (
          <TouchableNativeFeedback
            useForeground={true}
            onPress={this.onPress}
            background={TouchableNativeFeedback.Ripple('grey', false)}
            {...props}
          >
            <FlexContainer>
              {children}
            </FlexContainer>
          </TouchableNativeFeedback>
        ),
      }) || null
    )
  }
}

export namespace Button {
  export interface Props
    extends Omit<TouchableOpacityProps, 'onPress'>,
      Omit<TouchableNativeFeedbackProps, 'onPress'> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPress?: (payload?: any) => void
  }
}
