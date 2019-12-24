import Hex from '../hexgrid/Hex'
import Game, { Player, Unit, UnitType } from './Game'

describe('Game', () => {
  test('lastTickTime updates on simulate', () => {
    const startTime = new Date('2020-01-01T00:00:00.000Z')
    const game = new Game(startTime, 15 * 60 * 1000)

    game.simulate()

    expect(game.lastTickTime().toISOString()).toBe('2020-01-01T00:15:00.000Z')

    game.simulate()

    expect(game.lastTickTime().toISOString()).toBe('2020-01-01T00:30:00.000Z')
  })

  describe('Combat', () => {
    test('units should fight', () => {
      const player1: Player = { name: 'player1' }
      const player2: Player = { name: 'player2' }
      const soldier: UnitType = { name: 'Soldier', damage: 1, maxHp: 5, speed: 1 }
      const unit1: Unit = { hp: 5, position: new Hex(0, 0), owner: player1, type: soldier }
      const unit2: Unit = { hp: 3, position: new Hex(0, 0), owner: player2, type: soldier }
      const game = new Game(new Date('2020-01-01'), 1, [unit1, unit2])

      game.simulate()

      expect(unit1.hp).toBe(4)
      expect(unit2.hp).toBe(2)
    })
  })
})
