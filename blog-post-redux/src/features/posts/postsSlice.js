import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'
const initialState = [
    {
        id: '1',
        title: 'Learn React',
        description: 'Learning react will help to make single page application',
        date: sub(new Date(), { minutes: 10 }).toISOString(),

    },
    {
        id: '2',
        title: 'Learn Redux',
        description: 'Learning redux will help to manage the state',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
    },
    {
        id: '3',
        title: 'Learn Javascript',
        description: 'Learn javascript to make the fully functional websites',
        date: sub(new Date(), { minutes: 15 }).toISOString(),


    },
    {
        id: '4',
        title: 'Learn Next js',
        description: 'Next js is the javascript framework which help to write react code even better', userId: '1',
        date: sub(new Date(), { minutes: 20 }).toISOString(),

    },
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