import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import usersSlice from "../features/users/usersSlice";
// import postSlice from "../features/posts/postsSlice";
// import searchSlice from "../features/search/searchSlice";

export const store = configureStore({
    reducer: {
        // posts: postSlice,
        // search: searchSlice
        posts: postsSlice,
        users: usersSlice
    }
})