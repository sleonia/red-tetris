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
        setId: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        }
    }
})

export const { setId } = userSlice.actions
export const { reducer } = userSlice
