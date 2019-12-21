import mongoose, { Document, Schema } from 'mongoose'

export type Game = {
  name: string
}

const GameSchema = new Schema<Game>({
  name: { type: String, required: true, unique: true },
})

export default mongoose.model<Document & Game>('Game', GameSchema)
