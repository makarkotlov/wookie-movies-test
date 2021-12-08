import { randomBetween, getObjectKeys } from '../utils'

describe('utils ', () => {
  it('randomBetween should work as expected', () => {
    const min = 0
    const max = 10
    const value = randomBetween(min, max)
    const isGreaterThanMax = value > max
    const isLesserThanMin = value < min

    expect(typeof value === 'number').toEqual(true)
    expect(Number.isInteger(value)).toEqual(true)
    expect(!isGreaterThanMax && !isLesserThanMin).toEqual(true)
  })

  it('getObjectKeys should work as expected', () => {
    const obj = {
      key1: {},
      key2: {},
      key3: {},
    }

    const value = getObjectKeys(obj)

    const keys = ['key1', 'key2', 'key3']

    expect(value).toEqual(keys)
  })
})
