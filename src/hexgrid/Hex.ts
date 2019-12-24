import { range } from '../utils'

export default class Hex {
  constructor(readonly x: number, readonly y: number) {}
  public parity = () => this.y % 2
  public neighbors = () => directions.map(dir => this.plus(dir))
  public distanceTo = (that: Hex) => this.toCube().distanceTo(that.toCube())
  public neighborsWithin = (radius: number) => this.toCube().neighborsWithin(radius)
  public isInside = (maxX: number, maxY: number) => range(0, maxX).includes(this.x) && range(0, maxY).includes(this.y)
  public plus = (that: Hex) => new Hex(this.x + that.x, this.y + that.y)
  public minus = (that: Hex) => new Hex(this.x - that.x, this.y - that.y)
  public toCube = () => new Cube(this.x - (this.y - this.parity()) / 2, -this.x - this.y, this.y)
  public equals = (that: Hex) => this.x === that.x && this.y === that.y
}

const directions = [new Hex(+1, 0), new Hex(+1, -1), new Hex(0, -1), new Hex(-1, 0), new Hex(-1, +1), new Hex(0, +1)]

const abs = Math.abs
const max = Math.max
const min = Math.min

class Cube {
  constructor(readonly x: number, readonly y: number, readonly z: number) {}
  public distanceTo = (that: Cube) => (abs(this.x - that.x) + abs(this.y - that.y) + abs(this.z - that.z)) / 2
  public neighborsWithin = (radius: number) =>
    range(-radius, radius).flatMap(x =>
      range(max(-radius, -x - radius), min(radius, -x + radius)).flatMap(y => this.plus(new Cube(x, y, -x - y))),
    )
  public plus = (that: Cube) => new Cube(this.x + that.x, this.y + that.y, this.z + that.z)
  public minus = (that: Cube) => new Cube(this.x - that.x, this.y - that.y, this.z - that.z)
  public toHex = () => new Hex(this.x + (this.z - (this.z % 2)) / 2, this.z)
}
