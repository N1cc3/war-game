import Hex from '../hexgrid/Hex'

export default class Game {
  constructor(private _lastTickTime: Date, readonly tickMs: number, private _units: Unit[] = []) {}

  readonly lastTickTime = () => this._lastTickTime
  readonly units = () => this._units

  readonly simulate = () => {
    this._units.forEach(this.fight)
    this._lastTickTime = new Date(this._lastTickTime.valueOf() + this.tickMs)
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
