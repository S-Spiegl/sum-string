const count = require('./sumString')

describe('count', () => {
  it('counts a single character string', () => {
    expect(count('a')).toEqual({a: 1})
  })
  it('counts a longer string', () => {
    expect(count('aba')).toEqual({ a: 2, b: 1 })
  })
  it('returns an empty object literal when no string is given', () => {
    expect(count()).toEqual({})
  })
})