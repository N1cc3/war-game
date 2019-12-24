import { Game } from './domain'
import { simulateTick } from './game'

describe('game', () => {
  test('lastTickTime updates on simulateTick', () => {
    const game: Game = { lastTickTime: 0, tickTime: 100 }
    expect(simulateTick(game)).toMatchObject<Game>({ lastTickTime: 100, tickTime: 100 })
  })
})
