import Hex from './hexgrid/Hex'

export type Game = {
  lastTickTime: number // When last tick was simulated, epoch seconds
  tickTime: number // Time between ticks, seconds
}
export type Unit = {
  unitTypeId: string
  position: Hex
  hp: number
  damage: number
  ownerPlayerId: string
}
export type UnitType = {
  name: string
  damage: number
  maxHp: number
  speed: number
}
export type Player = {
  name: string
  password: string
}
