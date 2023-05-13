import React from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import "./Header.css";
import { SearchBar } from './SearchBar/SearchBar'

export const Header = () => {
  const dispatch = useDispatch();

  //Clicking title returns to the home screen
  // const onClickTitle = () => {
  //     dispatch(/*The method to return home*/('r/Home/'))
  // }

  return (
    <header className="header">
      <div className="leftDiv">
        <img
          alt="Reddit Logo"
          src="https://static.vecteezy.com/system/resources/previews/018/930/474/original/reddit-logo-reddit-icon-transparent-free-png.png"
          className="logo"
        />
        <h1>Minimal Reddit</h1>
      </div>
      <div className="searchBar">
      <SearchBar />
    </div>
    </header>
  );
};
