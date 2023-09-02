import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define a localStorage key for your posts data
const localStorageKey = "blog";

// Try to load posts data from localStorage, or use an empty array as initial state
const initialState = JSON.parse(localStorage.getItem(localStorageKey)) || [];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action) => {
                state.push(action.payload);
                // Save the updated state to localStorage
                localStorage.setItem(localStorageKey, JSON.stringify(state));
            },
            prepare(title, description, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                };
            }
        },
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
                // Save the updated state to localStorage
                localStorage.setItem(localStorageKey, JSON.stringify(state));
            }
        },
        deletePost: (state, action) => {
            const postIdToDelete = action.payload;
            const updatedState = state.filter(post => post.id !== postIdToDelete);
            localStorage.setItem(localStorageKey, JSON.stringify(updatedState));
            return updatedState;
        }
    }
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
