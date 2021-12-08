import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Search from 'modules/movies/screens/search'
import Details from 'modules/movies/screens/details'

import { Routes } from '../../routes'
import { SearchStackParamList } from './types'

export const Stack = createStackNavigator<SearchStackParamList>()

const SearchStack = (
  <Stack.Group screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.Search} component={Search} />
    <Stack.Screen name={Routes.Details} component={Details} />
  </Stack.Group>
)

export default SearchStack
