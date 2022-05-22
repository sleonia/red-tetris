import { io } from 'socket.io-client'
import type { Socket } from 'socket.io-client'

import type { ClientToServerEvents, ServerToClientEvents } from './socket-events'

const DEV_URL = 'http://localhost:4000'
const URL = process.env.NODE_ENV === 'development' ? DEV_URL : process.env.NEXT_PUBLIC_VERCEL_URL as string


export { useAppSelector, useAppDispatch } from './hooks'
export { store, wrapper } from './store'
export type { RootState, AppDispatch } from './store'

export const socket: Socket<ClientToServerEvents, ServerToClientEvents> = io(URL, { autoConnect: true })
