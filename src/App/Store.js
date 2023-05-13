import { configureStore } from '@reduxjs/toolkit';
import SearchBarSlice from '../Components/Header/SearchBar/SearchBarSlice';
import PostsSlice from '../Components/Posts/PostsSlice';



export default configureStore({
    reducer: {
        search: SearchBarSlice,
        post: PostsSlice,

    }
})
