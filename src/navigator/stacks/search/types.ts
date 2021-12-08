import { Routes } from '../../routes'

export type SearchStackParamList = {
  [Routes.Search]: undefined
  [Routes.Details]: { id: string }
}
