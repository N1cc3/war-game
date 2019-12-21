import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import Player from './Player'

const app = express()
const port = 8080

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/players/save', (req, res) => {
  new Player(req.body)
    .save()
    .then(() => res.send('Saved'))
    .catch(() => res.send('Failed'))
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
