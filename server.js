const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1>In branch develop</h1>')
})

app.get('/jakkawal', (req, res) => {
  return res.send('<h1>In branch feature jakkawal</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})