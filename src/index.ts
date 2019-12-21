import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import Player from './Player'
import Game from './Game'

const app = express()
const port = 8080

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

app.use(bodyParser.json())

app.get('/players', (req, res) => {
  Player.find().then(players => res.send(players.map(({ name }) => ({ name }))))
})

app.get('/games', (req, res) => {
  Game.find().then(games => res.send(games.map(({ name }) => ({ name }))))
})

app.post('/players/save', (req, res) => {
  new Player(req.body)
    .save()
    .then(() => res.send('Saved'))
    .catch(() => res.send('Failed'))
})

app.post('/games/save', (req, res) => {
  new Game(req.body)
    .save()
    .then(() => res.send('Saved'))
    .catch(() => res.send('Failed'))
})


app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
