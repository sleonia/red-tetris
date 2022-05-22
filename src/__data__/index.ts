import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import counterReducer from './counter'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export const wrapper = createWrapper(() => store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
