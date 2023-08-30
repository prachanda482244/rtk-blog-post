import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        name: 'Prachanda Rana'
    },
    {
        id: 1,
        name: 'Sushmita Rana'
    },
    {
        id: 2,
        name: 'Prakash Rana'
    },
    {
        id: 3,
        name: 'Rajesh Rana'
    },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})
export const selectAllUsers = state => state.users
export default usersSlice.reducer