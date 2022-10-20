import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ApiArray} from '../interface'

const initialState: ApiArray = {
    user: false,
    today: '',
    avg_today: 0,
    avg_week: [],
    avg_month: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: ApiArray, action: PayloadAction<ApiArray>) => {
            state.user = action.payload.user;
            state.today = action.payload.today;
            state.avg_today = action.payload.avg_today;
            state.avg_week = action.payload.avg_week;
            state.avg_month = action.payload.avg_month;
        },
    },
})



// Action creators are generated for each case reducer function
export const {increment} = counterSlice.actions

export default counterSlice.reducer