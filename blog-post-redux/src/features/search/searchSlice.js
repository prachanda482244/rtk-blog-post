import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchQuery: '',
    filteredArray: []
}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.searchQuery = action.payload
        },
        setFilteredPost: (state, action) => {
            state.filteredArray = action.payload
            if (state.searchQuery === '') {
                state.filteredArray = []
            }
        }
    }
})

export const { setSearch, setFilteredPost } = searchSlice.actions
export default searchSlice.reducer