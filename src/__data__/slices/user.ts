import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type UserIdState = {
    id: string
}

const initialState: UserIdState = {
    id: ''
}

export const userSlice = createSlice({
    name: 'userId',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        }
    }
})

export const { setUserId } = userSlice.actions
export const { reducer } = userSlice
