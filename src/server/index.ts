import http from 'http'

import express from 'express'
import { Server } from 'socket.io'

import {
    ServerToClientEvents,
    ClientToServerEvents
} from './../__data__/socket-events'

const app = express()

const server = http.createServer(app)

const io = new Server<ServerToClientEvents, ClientToServerEvents>(server, {
    cors: {
        origin: '*'
    }
})

io.on('connect', (socket) => {
    console.log('A user connected', socket.id)

    socket.on('roomCheck', (arg) => {
        socket.emit('joinRoom', socket.rooms.has(arg))
    })
})

server.listen(4000, () => {
    console.log('listening on *:4000')
})
