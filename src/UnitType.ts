import mongoose, { Document, Schema } from 'mongoose'

export type UnitType = {
  name: string
  damage: number
  maxHp: number
  speed: number
}

const UnitTypeSchema = new Schema<UnitType>({
  name: { type: String, required: true, unique: true },
  damage: { type: Number, required: true },
  maxHp: { type: Number, required: true },
  speed: { type: Number, required: true },
})

export default mongoose.model<Document & UnitType>('UnitType', UnitTypeSchema)
