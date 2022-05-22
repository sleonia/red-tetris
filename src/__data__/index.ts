import socketIOClient from 'socket.io-client'
import type { Socket } from 'socket.io-client'

import type { ClientToServerEvents, ServerToClientEvents } from './socket-events'

export { useAppSelector, useAppDispatch } from './hooks'
export { store, wrapper } from './store'
export type { RootState, AppDispatch } from './store'

export const socket: Socket<ClientToServerEvents, ServerToClientEvents> = socketIOClient('http://127.0.0.1:4000', { autoConnect: false })
