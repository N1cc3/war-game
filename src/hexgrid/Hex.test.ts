import Hex from './Hex'

describe('Hex', () => {
  test('Checks the value of parity', () => {
    expect(new Hex(1, 0).parity()).toBe(0)
    expect(new Hex(1, 1).parity()).toBe(1)
    expect(new Hex(1, 2).parity()).toBe(0)
    expect(new Hex(1, 3).parity()).toBe(1)
  })

  test('neighbors should return the 6 neighboring hexes', () => {
    const origin = new Hex(0, 0)
    const neighbors = origin.neighbors()

    expect(neighbors).toHaveLength(6)
    expect(neighbors).not.toContain(new Hex(0, 0))
    expect(neighbors.find(hex => hex.equals(new Hex(0, 1)))).toBeTruthy()
    expect(neighbors.find(hex => hex.equals(new Hex(1, 0)))).toBeTruthy()
  })
})
