const express = require('express')
const app = express()
const port = 8023

app.get('/', (req, res) =>
  res.send('Greetings from CPEsss...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
