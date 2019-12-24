import Game from './Game'

describe('Game', () => {
  test('lastTickTime updates on simulate', () => {
    const game = new Game(100, 0)

    game.simulate()

    expect(game.lastTickTime).toBe(100)

    game.simulate()

    expect(game.lastTickTime).toBe(200)
  })
})
