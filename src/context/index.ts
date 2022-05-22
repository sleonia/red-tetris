import React, { useContext } from 'react'

import { socket } from '../__data__'

export const SocketContext = React.createContext<typeof socket | null>(null)

export const useSocket = (): typeof socket => {
    const ctx = useContext(SocketContext)

    if (ctx) {
        return ctx
    }

    throw new Error('socket is null')
}
