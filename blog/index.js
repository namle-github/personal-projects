const express = require('express')
const app = express()
const port = 3000

// define route
app.get('/namle', (req, res) => {
  res.send('Hello World! - Nam')
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1> <p>The whole world</p> <a href="/namle">Link</a>')
  })

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})