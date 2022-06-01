import http from 'http'

import express from 'express'
import { Server } from 'socket.io'

import {
    ServerToClientEvents,
    ClientToServerEvents
} from './../__data__/socket-events'

const port = parseInt(process.env.PORT || '4000', 10)

const app = express()
const server = http.createServer(app)

const io = new Server<ServerToClientEvents, ClientToServerEvents>(server, {
    cors: {
        origin: '*'
    }
})

io.on('connect', (socket) => {
    console.log('A user connected', io.sockets.adapter.rooms)

    socket.on('roomCheck', (roomId) => {
        socket.emit('joinRoom', io.sockets.adapter.rooms.has(roomId))
    })

    socket.on('roomCreate', (roomId) => {
        if (io.sockets.adapter.rooms.has(roomId)) {
            socket.emit('joinRoom', io.sockets.adapter.rooms.has(roomId))
        } else {
            socket.join(roomId)
        }
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected', socket.rooms)
    })
})

server.listen(port, () => {
    console.log(`🍌 Listening on PORT=${port} 🍌`)
})
