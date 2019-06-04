const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = express.Router()
const port = 5000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)

mongoose.connect('mongodb://localhost/loginup', { useNewUrlParser: true })
const { connection } = mongoose

connection.once('open', () => console.log('connected to mongodb'))

app.get('/', (req, res) => res.send('Route works'))
app.post('/', (req, res) => {
  console.log(req.body)
})
app.listen(port, () => console.log(`Server is running at port ${port}`))
