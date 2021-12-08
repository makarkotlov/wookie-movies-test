import { Routes } from '../routes'
import { HomeStackParamList } from 'navigator/stacks/home/types'
import { SearchStackParamList } from 'navigator/stacks/search/types'

export type TabNavigatorParamList = {
  [Routes.HomeTab]: undefined
  [Routes.SearchTab]: undefined
} & HomeStackParamList &
  SearchStackParamList
