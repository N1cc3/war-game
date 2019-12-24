import mongoose, { Document, Schema } from 'mongoose'
import { Player, Unit, UnitType } from './game/Game'
import Hex from './hexgrid/Hex'

export const HexSchema = new Schema<Hex>({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
})

export type GameConfig = {
  lastTickTime: Date
  tickMs: number
}

export const GameModel = mongoose.model<Document & GameConfig>(
  'Game',
  new Schema({
    lastTickTime: { type: Date, required: true },
    tickMs: { type: Number, required: true },
  })
)

export const PlayerModel = mongoose.model<Document & Player>(
  'Player',
  new Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  })
)

export const UnitModel = mongoose.model<Document & Unit>(
  'Unit',
  new Schema({
    unitTypeId: { type: String },
    position: { type: HexSchema, required: true },
    hp: { type: Number, required: true },
    ownerPlayerId: { type: String },
  })
)

export const UnitTypeModel = mongoose.model<Document & UnitType>(
  'UnitType',
  new Schema({
    name: { type: String, required: true, unique: true },
    damage: { type: Number, required: true },
    maxHp: { type: Number, required: true },
    speed: { type: Number, required: true },
  })
)
