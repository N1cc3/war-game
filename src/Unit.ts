import mongoose, { Document, Schema } from 'mongoose'
import HexModel from './Hex'
import Hex from './hexgrid/Hex'

export type Unit = {
  unitTypeId: Schema.Types.ObjectId
  position: Hex
  hp: number
  damage: number
  ownerPlayerId: Schema.Types.ObjectId
}

const UnitSchema = new Schema<Unit>({
  unitTypeId: { type: String },
  position: { type: HexModel, required: true },
  hp: { type: Number, required: true },
  ownerPlayerId: { type: String },
})

export default mongoose.model<Document & Unit>('Unit', UnitSchema)
