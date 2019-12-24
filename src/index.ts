import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import Game from './game/Game'
import Hex from './hexgrid/Hex'
import { GameConfig, GameModel, PlayerModel, UnitModel } from './mongo'

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

const simulateGame = async () => {
  console.log('Simulating game...')
  const savedGame = await GameModel.findOne()
  if (!savedGame) return // Game has disappeared from database

  const game = new Game(savedGame.lastTickTime, savedGame.tickMs)
  game.simulate()
  savedGame.lastTickTime = game.lastTickTime()
  await savedGame.save()
  console.log('Simulating game... DONE')
}

const initGame = async () => {
  console.log('Initializing game...')
  let savedGame = await GameModel.findOne()

  if (!savedGame) {
    savedGame = await new GameModel({ lastTickTime: new Date(), tickMs: 1 * 1000 } as GameConfig).save()
  }

  const game = new Game(savedGame.lastTickTime, savedGame.tickMs)

  while (new Date().valueOf() > game.lastTickTime().valueOf() + game.tickMs) game.simulate()

  savedGame.lastTickTime = game.lastTickTime()
  await savedGame.save()

  setInterval(simulateGame, savedGame.tickMs)
  console.log('Initializing game... DONE')
}

const app = express()
const port = 8080

app.use(bodyParser.json())

app.get('/players', (req, res) => {
  PlayerModel.find().then(players => res.send(players.map(({ name }) => ({ name }))))
})

app.get('/games', (req, res) => {
  GameModel.find().then(games => res.send(games.map(({ lastTickTime }) => ({ lastTickTime }))))
})

app.post('/players/save', (req, res) => {
  new PlayerModel(req.body)
    .save()
    .then(() => res.send('Saved'))
    .catch(() => res.send('Failed'))
})

app.post('/games/save', (req, res) => {
  new GameModel(req.body)
    .save()
    .then(() => res.send('Saved'))
    .catch(() => res.send('Failed'))
})

app.post('/unit', (req, res) => {
  new UnitModel({
    position: { x: 1, y: 2 },
    hp: 100,
  })
    .save()
    .then(() => res.send('Saved'))
    .catch(() => res.send('Failed'))
})

app.get('/units', (req, res) => {
  UnitModel.find().then(units => {
    const unit = units[0]
    res.send(new Hex(unit.position.x, unit.position.y).neighbors())
  })
})

initGame().then(() => {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
  })
})
