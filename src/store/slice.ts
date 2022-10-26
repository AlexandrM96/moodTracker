import {createAction, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ApiArray} from '../interface';

const initialState: ApiArray = {
    status: false,
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
    already_checked: false,
    login_page: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: ApiArray, action: PayloadAction<ApiArray>) => {
            state.status = action.payload.status;
            state.user = action.payload.user;
            state.today = action.payload.today;
            state.avg_today = action.payload.avg_today;
            state.avg_week = action.payload.avg_week;
            state.avg_month = action.payload.avg_month;
            state.users_mood = action.payload.users_mood;
            state.already_checked = action.payload.already_checked;
            state.login_page = action.payload.status;
        },
    },
})

// Action creators are generated for each case reducer function
export const {increment} = counterSlice.actions

export default counterSlice.reducer