import React, { Component } from "react";
// import movies from "../data/MovieData";

const movieSearch = (props) => {
    return (
        <input
        id="search"
        type="text"
        value ={props.inputValue}
        onChange={props.movieSearch}
        placeholder="Search for a movie.."
      />
    )
}

export default movieSearch;

// handleSearch = e => {
//     e.preventDefault();
//     let value = e.target.value.toLowerCase();
//     console.log(value);
//   };

{/* <input
          id="search"
          type="text"
          onChange={this.handleSearch}
          placeholder="Search for a movie.."
        /> */}