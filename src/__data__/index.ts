import { io } from 'socket.io-client'
import type { Socket } from 'socket.io-client'

import type { ClientToServerEvents, ServerToClientEvents } from './socket-events'

const URL = 'http://localhost:4000'

export { useAppSelector, useAppDispatch } from './hooks'
export { store, wrapper } from './store'
export type { RootState, AppDispatch } from './store'

export const socket: Socket<ClientToServerEvents, ServerToClientEvents> = io(URL, { autoConnect: true })
