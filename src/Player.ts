import mongoose, { Document, Schema } from 'mongoose'

export type Player = {
  name: string
  password: string
}

const PlayerSchema = new Schema<Player>({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

export default mongoose.model<Document & Player>('Player', PlayerSchema)
