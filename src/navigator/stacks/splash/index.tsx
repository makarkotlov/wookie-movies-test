import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Splash from 'components/splash'

import { Routes } from '../../routes'
import { SplashStackParamsList } from './types'

const Stack = createStackNavigator<SplashStackParamsList>()

const SplashStack = <Stack.Screen name={Routes.Splash} component={Splash} options={{ headerShown: false }} />

export default SplashStack
