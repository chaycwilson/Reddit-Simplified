import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSearch } from "./SearchBarSlice";
import "./SearchBar.css";


export const SearchBar = () => {
    const dispatch = useDispatch();

    // const activeSubSliced = useSelector(state => state.subreddits.activeSubreddit).slice(3, -1);
    const SearchBarValue = useSelector(state => state.search);

    //Handle the input from user 
    const onTextChange = (e) => {
        dispatch(setActiveSearch(e.target.value));
    }

    //Display input to search 
    return (
        <input 
        className="searchBar"
        id="Search"
        type="text"
        onChange={onTextChange}
        value={SearchBarValue}
        placeholder="Search for subreddits..."
        />
        
        
        
    )

}