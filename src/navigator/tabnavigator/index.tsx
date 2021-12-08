import React from 'react'
import { Platform } from 'react-native'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Button } from 'components'
import TabBarIcon from 'components/tabbaricon'

import { Routes } from '../routes'
import { TabNavigatorParamList } from './types'
import HomeStack, { Stack as HomeStackNavigator } from 'navigator/stacks/home'
import SearchStack, { Stack as SearchStackNavigator } from 'navigator/stacks/search'

const defaultScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarButton: props => <Button {...props} />,
  tabBarAllowFontScaling: false,
  tabBarActiveTintColor: '#9F6126',
  tabBarInactiveTintColor: 'black',
  tabBarLabelStyle: {
    fontFamily: 'Poppins',
    ...Platform.select({
      ios: {
        fontSize: 9,
      },
    }),
  },
}

const tabSettings: Record<Routes, BottomTabNavigationOptions> = {
  [Routes.HomeTab]: {
    tabBarLabel: 'Home',
    tabBarIcon: (props: BottomTabNavigationOptions['tabBarIcon']) => <TabBarIcon iconName="house" {...props} />,
    tabBarTestID: 'HomeTabButton',
    ...defaultScreenOptions,
  },
  [Routes.SearchTab]: {
    tabBarLabel: 'Search',
    tabBarIcon: (props: BottomTabNavigationOptions['tabBarIcon']) => <TabBarIcon iconName="search" {...props} />,
    tabBarTestID: 'SearchTabButton',
    ...defaultScreenOptions,
  },
}

const Tab = createBottomTabNavigator<TabNavigatorParamList>()

const TabNavigator = () => (
  // eslint-disable-next-line react/jsx-no-bind
  <Tab.Navigator screenOptions={({ route }) => tabSettings[route.name]}>
    <Tab.Screen name={Routes.HomeTab}>
      {() => (
        <HomeStackNavigator.Navigator>
          {HomeStack}
        </HomeStackNavigator.Navigator>
      )}
    </Tab.Screen>
    <Tab.Screen name={Routes.SearchTab}>
      {() => (
        <SearchStackNavigator.Navigator>
          {SearchStack}
        </SearchStackNavigator.Navigator>
      )}
    </Tab.Screen>
  </Tab.Navigator>
)

export default TabNavigator
