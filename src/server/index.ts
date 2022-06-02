import http from 'http'

import express from 'express'
import { Server } from 'socket.io'

import {
    ServerToClientEvents,
    ClientToServerEvents
} from './../__data__/socket-events'
import { Game, IGame } from './game'

const port = parseInt(process.env.PORT || '4000', 10)

const app = express()
const server = http.createServer(app)

const games = new Map<string, IGame>()


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

    socket.on('newGame', () => {
        if (!games.has(socket.id)) {
            games.set(socket.id, new Game(socket.id))
        }

        socket.emit('newGame', socket.id)
    })

    socket.on('startGame', () => {
        const game = games.get(socket.id)!
        game.startGame()
        io.in(socket.id).emit('startGame')

        // const interval = setInterval(() => {
        //     const data = game.updateState();
  
        //     if (!data) {
        //       io.in(socket.id).emit('new-state', {
        //         id,
        //         message: 'Game session terminated',
        //         status: 0,
        //       });
        //       game.pauseGame();
        //       clearInterval(interval);
        //       return;
        //     }
  
        //     io.in(id).emit('new-state', data);
        //   }, defaultTimeout);
        // });
    })

    socket.on('pauseGame', () => {
        const game = games.get(socket.id)!
        game.pauseGame()
        io.in(socket.id).emit('pauseGame')
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected', socket.rooms)
    })
})

server.listen(port, () => {
    console.log(`🍌 Listening on PORT=${port} 🍌`)
})
