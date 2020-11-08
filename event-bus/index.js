const express = require('express')
const bodyParser = require('body-parser')

const axios = require('axios')

const app = express()
app.use(bodyParser.json())

const events = []

// URLS
const urls = {
    dev: {
        post: 'http://localhost:4000/events',
        comments: 'http://localhost:4001/events',
        query: 'http://localhost:4003/events',
        moderation: 'http://localhost:4003/events'
    },
    kube: {
        post: 'http://posts-clusterip-srv:4000/events',
        comments: 'http://localhost:4001/events',
        query: 'http://localhost:4003/events',
        moderation: 'http://localhost:4003/events'
    }


}

app.post('/events', async (req, res) => {
    const event = req.body

    // console.log('new event--->', event)


    events.push(event)

    // post
    axios.post(urls.kube.post, event)
    // comments
    // axios.post('http://localhost:4001/events', event)
    //query 
    // axios.post('http://localhost:4002/events', event)
    // moderation
    // axios.post('http://localhost:4003/events', event)

    res.send({ status: 'ok' })
})


app.get('/events', (req, res) => {

    console.log('version development-0.0.2')
    res.send(events)

})


app.listen(4005, () => {
    console.log('event bus version: development-0.0.6')
    console.log('event bus running in localhost:4005')
})