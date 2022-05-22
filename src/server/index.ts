import http from 'http'

import express from 'express'
import { Server } from 'socket.io'

import {
    ServerToClientEvents,
    ClientToServerEvents
} from './../__data__/socket-events'

const app = express()

const port = process.env.PORT || 4000

const server = http.createServer(app)

const io = new Server<ServerToClientEvents, ClientToServerEvents>(server, {
    cors: {
        origin: '*'
    }
})

io.on('connect', (socket) => {
    console.log('A user connected', socket.id)

    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })

    socket.on('roomCheck', (roomId) => {
        socket.emit('joinRoom', socket.rooms.has(roomId))
    })

    socket.on('roomCreate', (roomId) => {
        if (socket.rooms.has(roomId)) {
            socket.emit('joinRoom', socket.rooms.has(roomId))
        } else {
            socket.join(roomId)
        }
    })
})

server.listen(port, () => {
    console.log(`🍌 Listening on PORT=${port} 🍌`)
})
