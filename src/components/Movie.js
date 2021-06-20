import React, { Component } from "react";
import movies from "../data/MovieData";
import Sort from "./Sort";

class MovieCard extends Component {
  state = {
    movieArr: [...movies],
    isSorted: false,
  };
  handleSortAscend = () => {
    let tempArr = [...this.state.movieArr];
    tempArr.sort((a, b) => Number(a.year) - Number(b.year));
    this.setState({
      movieArr: tempArr,
      isSorted: !this.state.isSorted,
    });
  };
  handleSortDescend = () => {
    let tempArr = [...this.state.movieArr];
    tempArr.sort((a, b) => Number(b.year) - Number(a.year));
    this.setState({
      movieArr: tempArr,
      isSorted: !this.state.isSorted,
    });
  };
  handleSortRate = () => {
    let tempArr = [...this.state.movieArr];
    tempArr.sort((a, b) => Number(b.rate) - Number(a.rate));
    this.setState({
      movieArr: tempArr,
      isSorted: !this.state.isSorted,
    });
  };
  handleSortAtoZ = () => {
    let tempArr = [...this.state.movieArr];
    tempArr.sort((a, b) => (a.title > b.title ? 1 : -1));
    this.setState({
      movieArr: tempArr,
      isSorted: !this.state.isSorted,
    });
  };
  handleSortZtoA = () => {
    let tempArr = [...this.state.movieArr];
    tempArr.sort((a, b) => (b.title > a.title ? 1 : -1));
    this.setState({
      movieArr: tempArr,
      isSorted: !this.state.isSorted,
    });
  };
  render() {
    return (
      <main>
        <div className="button-wrapper">
          <Sort
            sortZ_A={this.handleSortZtoA}
            sortA_Z={this.handleSortAtoZ}
            sortRate={this.handleSortRate}
            sortDescend={this.handleSortDescend}
            sortAscend={this.handleSortAscend}
          />
        </div>
        <div className="wrapper">
          {this.state.movieArr.map((movie, i) =>
            <div className="movieCard">
              <div key={i} className="card__text">
                <h1>
                  {movie.title}
                </h1>
                <h3>
                  {movie.year}
                </h3>
                <h2>
                  {movie.directior}
                </h2>
                <h3>
                  {movie.duration}
                </h3>
                <h2>
                  {movie.rate}
                </h2>
                <h3>
                  {movie.genre[0]}
                </h3>
                <h3>
                  {movie.genre[1]}
                </h3>
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default MovieCard;
