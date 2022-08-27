const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1>Hello Jakkawal Phooluemsai</h1>')
  return res.send('<h1>สวัสดี ด็อกเตอร์ว่าที่ร้อยตรีจักรวาล ภูเลื่อมใส</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})