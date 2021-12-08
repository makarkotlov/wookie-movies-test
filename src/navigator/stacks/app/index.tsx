import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Routes } from '../../routes'
import { AppStackParamsList } from './types'
import TabNavigator from '../../tabnavigator'

const Stack = createStackNavigator<AppStackParamsList>()

const AppStack = (
  <Stack.Group screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.TabNavigator} component={TabNavigator} />
  </Stack.Group>
)

export default AppStack
