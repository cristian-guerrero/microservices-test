import React from 'react'

import ReactDOM from 'react-dom'

import App from './App'

// const eventBusURL = 'http://localhost:4005/events'
const eventBusURL = 'http://event-bus-clusterip-srv:4005/events'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)