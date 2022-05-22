import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { roomIdReducer, userReducer } from './slices'

export const store = configureStore({
    reducer: {
        roomId: roomIdReducer,
        user: userReducer
    }
})

export const wrapper = createWrapper(() => store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
