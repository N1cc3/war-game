import Hex from './hexgrid/Hex'

export type Game = {
  name: string
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
