import { Game } from './domain'
import { simulateTick } from './game'

const emptyGame: Game = { lastTickTime: 0, tickTime: 0, units: [], unitTypes: [], players: [] }

describe('game', () => {
  test('lastTickTime updates on simulateTick', () => {
    const game: Game = { ...emptyGame, tickTime: 100 }

    simulateTick(game)

    expect(game).toMatchObject<Game>({ ...emptyGame, lastTickTime: 100, tickTime: 100 })
  })
})
