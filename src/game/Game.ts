import Hex from '../hexgrid/Hex'

export default class Game {
  constructor(
    readonly tickTime: number, // Time between ticks, seconds
    private _lastTickTime: number, // When last tick was simulated, epoch seconds
    private _units: Unit[] = []
  ) {}

  readonly lastTickTime = () => this._lastTickTime
  readonly units = () => this._units

  readonly simulate = () => {
    this._units.forEach(this.fight)
    this._lastTickTime += this.tickTime
  }

  private fight = (attacker: Unit) => {
    const target = this._units.find(
      defender =>
        defender.owner !== attacker.owner && // is enemy
        defender.position.equals(attacker.position) && // on same hex
        defender.hp > 0 // is alive
    )
    if (target) target.hp -= attacker.type.damage
  }
}

export type Unit = {
  type: UnitType
  owner: Player
  position: Hex
  hp: number
}
export type UnitType = {
  name: string
  damage: number
  maxHp: number
  speed: number
}
export type Player = {
  name: string
}
