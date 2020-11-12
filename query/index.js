
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')


const app = express()

app.use(bodyParser.json())
app.use(cors())


const posts = {}

// const eventBusURL = 'http://localhost:4005/events'
const eventBusURL = 'http://event-bus-clusterip-srv:4005/events'

const handleEvent = (type, data) => {

    if (type === 'PostCreated') {

        const { id, title } = data

        posts[id] = { id, title, comments: [] }
    }

    if (type === 'CommentCreated') {

        const { id, content, postId, status } = data

        posts[postId].comments.push({ id, content, status })
    }

    if (type === 'CommentUpdated') {
        const { id, content, postId, status } = data

        const post = posts[postId]
        const comment = post.comments.find(x => x.id === id)

        comment.status = status
        comment.content = content
    }
}

/**
 * 
 */
app.get('/posts', (req, res) => {

    res.send(posts)
})

app.post('/events', (req, res) => {

    const { type, data } = req.body

    console.log(type, data)

    handleEvent(type, data)

    res.send({})

})




app.listen(4002, async () => {
    console.log('query running in localhost:4002')

    const res = await axios.get(eventBusURL)

    for(const e of res.data) {
        console.log('Processing event: ', e.type)
        handleEvent(e.type, e.data)
    }


})