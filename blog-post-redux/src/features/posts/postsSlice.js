import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
    {
        id: 1,
        title: 'Learn React',
        description: 'Learning react will help to make single page application',
    },
    { id: 2, title: 'Learn Redux', description: 'Learning redux will help to manage the state' },
    { id: 3, title: 'Learn Javascript', description: 'Learn javascript to make the fully functional websites' },
    { id: 4, title: 'Learn Next js', description: 'Next js is the javascript framework which help to write react code even better', userId: 1 },
]
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare(title, description, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        userId
                    }
                }
            }
        }
    }
})
export const selectAllPosts = (state) => state.posts
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer