export default class Game {
  constructor(
    readonly tickTime: number, // Time between ticks, seconds
    private _lastTickTime: number, // When last tick was simulated, epoch seconds
  ) {}

  get lastTickTime() {
    return this._lastTickTime
  }

  public simulate = () => {
    this._lastTickTime += this.tickTime
  }
}
