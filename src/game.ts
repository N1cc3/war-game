import { Game } from './domain'

export const simulateTick = (game: Game) => {
  const { tickTime, units, unitTypes, players } = game

  game.lastTickTime += tickTime
}
