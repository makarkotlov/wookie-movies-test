import React from 'react'
import { observer } from 'mobx-react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppStore from 'store'

import AppStack from './stacks/app'
import SplashStack from './stacks/splash'

const Stack = createStackNavigator()

const Navigator = () => {
  const { initialized } = AppStore

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!initialized ? SplashStack : AppStack}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default observer(Navigator)
