import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import Hex from './hexgrid/Hex'
import { GameModel, PlayerModel, UnitModel } from './mongo'

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

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

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
