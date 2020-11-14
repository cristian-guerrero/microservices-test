
const express = require('express')

const bodyParse = require('body-parser')

const axios = require('axios')

const app = express()

app.use(bodyParse.json())


// const eventBusURL = 'http://localhost:4005/events'
const eventBusURL = 'http://event-bus-clusterip-srv:4005/events'


app.post('/events', async (req, res) => {

    const { type, data } = req.body

    if (type === 'CommentCreated') {
        // change te status depends if contains orange word
        console.log('data ----', data)
        const status = data.content.includes('orange') ? 'rejected' : 'approved'


        console.log('new comment status : ' + status)

        await axios.post(eventBusURL, {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
    }

    res.send({})

})

app.listen(4003, () => {

    console.log('Moderation runnin in --> localhost:4003')
})