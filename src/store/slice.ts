import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ApiArray} from '../interface';

const initialState: ApiArray = {
    user: {
        id: 0,
        email: '',
        name: '',
        last_name: '',
        middle_name: '',
        phone: '',
        phone_short: '',
        permissions: '',
        is_activated: false,
        activated_at: '',
        last_login: '',
        is_superuser: 0,
        property: '',
        created_at: '',
        updated_at: '',
        deleted_at: '',
        phone_list: []
    },
    today: '',
    avg_today: 0,
    avg_week: [],
    avg_month: [],
    users_mood: [],
    already_checked: false
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
console.log(initialState);


// Action creators are generated for each case reducer function
export const {increment} = counterSlice.actions

export default counterSlice.reducer