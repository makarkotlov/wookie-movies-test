import React, { PropsWithChildren, ReactNode, ComponentType, FunctionComponent, ReactElement } from 'react'

export const List: FunctionComponent<List.Props> = ({ separator, children, ...props }) =>
  React.Children.toArray(children)
    .filter(item => item != null)
    .reduce<ReactNode[]>((store, item, index) => {
      if (index) {
        const key = `=$${index}`

        store.push(React.createElement(separator, { ...props, key }))
      }

      store.push(item)

      return store
    }, []) as unknown as ReactElement

export namespace List {
  export interface Props extends PropsWithChildren<unknown> {
    separator: ComponentType<unknown>
  }
}
