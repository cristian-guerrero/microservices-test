
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())


const posts = {}
/*
posts = {
 'iddkekd': {
     id: 'iddkekd',
     title: 'post title',
     comments:  [
         {
             id: 'adsfasdf',
             content: 'content'
         }
     ]
 }   
}
*/

app.get('/posts', (req, res) => {

    res.send(posts)
})

app.post('/events', (req, res) => {

    const { type, data } = req.body

    console.log(type, data)

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

    res.send(posts)

})


app.listen(4002, () => {
    console.log('query running in localhost:4002')
})