import Hex from '../hexgrid/Hex'
import Game, { Player, Unit, UnitType } from './Game'

describe('Game', () => {
  test('lastTickTime updates on simulate', () => {
    const game = new Game(100, 0)

    game.simulate()

    expect(game.lastTickTime()).toBe(100)

    game.simulate()

    expect(game.lastTickTime()).toBe(200)
  })

  describe('Combat', () => {
    test('units should fight', () => {
      const player1: Player = { name: 'player1' }
      const player2: Player = { name: 'player2' }
      const soldier: UnitType = { name: 'Soldier', damage: 1, maxHp: 5, speed: 1 }
      const unit1: Unit = { hp: 5, position: new Hex(0, 0), owner: player1, type: soldier }
      const unit2: Unit = { hp: 3, position: new Hex(0, 0), owner: player2, type: soldier }
      const game = new Game(100, 0, [unit1, unit2])

      game.simulate()

      expect(unit1.hp).toBe(4)
      expect(unit2.hp).toBe(2)
    })
  })
})
