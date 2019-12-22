import { range } from '../utils'

export default class Hex {
  public static of = ({ x, y }: { x: number; y: number }) => new Hex(x, y)
  constructor(public x: number, public y: number) {}
  public parity = () => this.y % 2
  public neighbors = () => directions[this.parity()].map(dir => this.add(dir))
  public distanceTo = (that: Hex) => this.toCube().distanceTo(that.toCube())
  public neighborsWithin = (radius: number) => this.toCube().neighborsWithin(radius)
  public isInside = (maxX: number, maxY: number) => range(0, maxX).includes(this.x) && range(0, maxY).includes(this.y)
  public add = (that: Hex) => new Hex(this.x + that.x, this.y + that.y)
  public sub = (that: Hex) => new Hex(this.x - that.x, this.y - that.y)
  public toCube = () => new Cube(this.x - (this.y - this.parity()) / 2, this.y, -this.x - this.y)
  public equals = (that: Hex) => this.x === that.x && this.y === that.y
}

const evenDirections = [new Hex(1, 0), new Hex(0, -1), new Hex(-1, -1), new Hex(-1, 0), new Hex(-1, 1), new Hex(0, 1)]
const oddDirections = [new Hex(1, 0), new Hex(1, -1), new Hex(0, -1), new Hex(-1, 0), new Hex(0, 1), new Hex(1, 1)]
const directions = [evenDirections, oddDirections]

const abs = Math.abs
const max = Math.max
const min = Math.min

class Cube {
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
