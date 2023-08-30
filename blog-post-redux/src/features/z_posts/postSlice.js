import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'Learn React', description: 'Learning react will help to make single page application' },
    { id: 2, title: 'Learn Redux', description: 'Learning redux will help to manage the state' },
    { id: 3, title: 'Learn Javascript', description: 'Learn javascript to make the fully functional websites' },
    { id: 4, title: 'Learn Next js', description: 'Next js is the javascript framework which help to write react code even better' },
]
// const savedPosts = JSON.parse(localStorage.getItem("posts")) || initialState;
let savedPosts;
try {
    savedPosts = JSON.parse(localStorage.getItem("posts")) || initialState;
} catch (error) {
    savedPosts = initialState;
}
const postSlice = createSlice({
    name: 'posts',
    initialState: savedPosts,
    reducers: {
        addPost: (state, action) => {
            const newPost = action.payload;
            state.push(newPost);
            localStorage.setItem("posts", JSON.stringify(state))
        },
        deletePost: (state, action) => {
            const updatedPosts = state.filter(post => post.id !== action.payload);
            localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Update local storage
            return updatedPosts;
        }
    }
})
export const getAllPost = (state) => state.posts
export const { addPost, deletePost } = postSlice.actions
export default postSlice.reducer