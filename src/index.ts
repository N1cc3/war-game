import express from 'express'

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/asd', (req, res) => {
  res.send('asd')
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
