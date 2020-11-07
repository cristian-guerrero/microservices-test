import React, {useState, useEffect} from 'react'

import axios from 'axios'

export default ({comments}) => {

    // console.log(comments)
    // const [comments , setComments] = useState([])

    /*
    const fetchDAta = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

        setComments(res.data)
    }

    useEffect(x => {

        fetchDAta()
    }, [])
    */


    const renderedComments = comments.map(comment =>{
        return <li key={comment.id}> {comment.content}</li>
    })

    return <ul>
        {renderedComments}
    </ul>
}