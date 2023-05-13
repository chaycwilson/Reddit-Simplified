import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        changePost: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default postsSlice.reducer;
export const { changePost } = postsSlice.actions;