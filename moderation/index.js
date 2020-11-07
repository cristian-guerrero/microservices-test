
const express = require('express')

const bodyParse = require('body-parser')

const axios = require('axios')

const app = express()

app.use(bodyParse.json())



app.post('/events', (req, res ) => {


    
})

app.listen(4003, () => {

    console.log('Moderation runnin in localhost:4003')
})