import React, { memo } from 'react'
import {
  Platform,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from 'react-native'

import { FlexContainer } from 'components'

export const Button = memo<Button.Props>(
  ({ children, ...props }) =>
    Platform.select({
      ios: (
        <TouchableOpacity activeOpacity={0.5} {...props}>
          {children}
        </TouchableOpacity>
      ),
      android: (
        <TouchableNativeFeedback
          useForeground
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

export namespace Button {
  export interface Props extends TouchableOpacityProps, TouchableNativeFeedbackProps {}
}
