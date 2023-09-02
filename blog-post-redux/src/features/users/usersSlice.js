import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.push(action.payload)
        }
    }
})
export const selectAllUsers = state => state.users
export const { addUsers } = usersSlice.actions
export default usersSlice.reducer