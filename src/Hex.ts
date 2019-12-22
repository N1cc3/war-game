import { Schema } from 'mongoose'
import Hex from './hexgrid/Hex'

export default new Schema<Hex>({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
})
