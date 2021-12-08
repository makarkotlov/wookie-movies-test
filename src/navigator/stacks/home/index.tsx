import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from 'modules/movies/screens/home'
import Details from 'modules/movies/screens/details'

import { Routes } from '../../routes'
import { HomeStackParamList } from './types'

export const Stack = createStackNavigator<HomeStackParamList>()

const HomeStack = (
  <Stack.Group screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.Home} component={Home} />
    <Stack.Screen name={Routes.Details} component={Details} />
  </Stack.Group>
)

export default HomeStack
