import { range } from '../utils'
import Cube from './Cube'

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
}

const evenDirections = [new Hex(1, 0), new Hex(0, -1), new Hex(-1, -1), new Hex(-1, 0), new Hex(-1, 1), new Hex(0, 1)]
const oddDirections = [new Hex(1, 0), new Hex(1, -1), new Hex(0, -1), new Hex(-1, 0), new Hex(0, 1), new Hex(1, 1)]
const directions = [evenDirections, oddDirections]
