import { Routes } from '../../routes'

export type HomeStackParamList = {
  [Routes.Home]: undefined
  [Routes.Details]: { id: string }
}
