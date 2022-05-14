import http from 'http'

import express from 'express'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

// app.use(cors())

io.on('connect', (socket) => {
    console.log('a user connected')
    socket.emit('now', {
        message: 'pepa'
    })
})

server.listen(4000, () => {
    console.log('listening on *:4000')
})
