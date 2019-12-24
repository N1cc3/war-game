import { Game } from './domain'

export const simulateTick = (game: Game): Game => {
  const { lastTickTime, tickTime } = game
  return {
    lastTickTime: lastTickTime + tickTime,
    tickTime,
  }
}
