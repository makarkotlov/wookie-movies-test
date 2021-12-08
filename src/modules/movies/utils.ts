/* eslint-disable no-undef */
export function isFulfilled<T>(result: PromiseSettledResult<T>): result is PromiseFulfilledResult<T> {
  return result.status === 'fulfilled'
}

export function getFulfilled<T>(results: PromiseSettledResult<T>[]): PromiseFulfilledResult<T>[] {
  return (results as PromiseFulfilledResult<T>[]).filter(result => isFulfilled(result))
}
