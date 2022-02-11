import { DependencyList, useMemo } from 'react'
import { StyleSheet, StyleProp } from 'react-native'

function compileStyle<T>(style: T) {
  return StyleSheet.create({ style }).style
}

// FIXME: types
export const useStyle = <T>(provider: () => T, dependencies?: DependencyList) =>
  useMemo(() => compileStyle<T>(provider()), dependencies)

export const useFlattenStyle = <Style>(provider: () => StyleProp<Style>, dependencies?: DependencyList) =>
  useStyle<Style>(() => StyleSheet.flatten<Style>(provider()) as Style, dependencies)
