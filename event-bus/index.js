const express = require('express')
const bodyParser = require('body-parser')

const axios = require('axios')

const app = express()
app.use(bodyParser.json())



app.post('/events', async (req, res) => {
    const event = req.body

    console.log('new event--->', event)

    axios.post('http://localhost:4000/events', event)
    axios.post('http://localhost:4001/events', event)
    axios.post('http://localhost:4002/events', event)

    res.send({status: 'ok'})
})


app.listen(4005, () => {
    console.log('event bus running in localhost:4005')
})