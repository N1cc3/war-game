import { range } from '../utils'
import Hex from './Hex'

const abs = Math.abs
const max = Math.max
const min = Math.min

export default class Cube {
  constructor(public x: number, public y: number, public z: number) {}
  public distanceTo = (that: Cube) => (abs(this.x - that.x) + abs(this.y - that.y) + abs(this.z - that.z)) / 2
  public neighborsWithin = (radius: number) =>
    range(-radius, radius).flatMap(x =>
      range(max(-radius, -x - radius), min(radius, -x + radius)).flatMap(y => this.add(new Cube(x, y, -x - y))),
    )
  public add = (that: Cube) => new Cube(this.x + that.x, this.y + that.y, this.z + that.z)
  public sub = (that: Cube) => new Cube(this.x - that.x, this.y - that.y, this.z - that.z)
  public toHex = () => new Hex(this.x + (this.z - (this.z % 2)) / 2, this.z)
}
