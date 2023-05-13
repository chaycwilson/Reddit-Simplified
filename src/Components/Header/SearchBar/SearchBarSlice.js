import { createSlice } from '@reduxjs/toolkit';



export const SearchBarSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        setActiveSearch: (state, action) => {
            state = action.payload;
        }
    }
})

export default SearchBarSlice.reducer;
export const { setActiveSearch } = SearchBarSlice.actions;