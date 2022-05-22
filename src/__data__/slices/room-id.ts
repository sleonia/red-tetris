import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type RoomIdState = {
    value: string
}

const initialState: RoomIdState = {
    value: ''
}

export const roomIdSlice = createSlice({
    name: '@modal/ROOM_ID',
    initialState,
    reducers: {
        change: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { change } = roomIdSlice.actions
export const { reducer } = roomIdSlice
