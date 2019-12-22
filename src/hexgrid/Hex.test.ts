import Hex from './Hex'

test('Checks the value of parity', () => {
  expect(new Hex(1, 0).parity()).toBe(0)
  expect(new Hex(1, 1).parity()).toBe(1)
  expect(new Hex(1, 2).parity()).toBe(0)
  expect(new Hex(1, 3).parity()).toBe(1)
})
