import React, { Component } from 'react';
import SearchContainer from '../../containers/searchContainer/SearchContainer';
import { Link } from 'react-router';
import MovieContainer from '../../containers/movieContainer/MovieContainer';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };

    this.enterKey = this.enterKey.bind(this);
  }

  getResults() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=74e395a1a0373d4f389e8f007c86c5e7&query=${this.state.searchValue}`)
      .then(data => data.json())
      .then(data => this.props.loadMovies(data.results))
  }

  getLatest() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=74e395a1a0373d4f389e8f007c86c5e7&language=en-US')
      .then(data => data.json())
      .then(data => this.props.loadMovies(data.results))
      .then(() => this.setState({ searchValue: '' }))
  }

  enterKey(e) {
    if(e.key === 'Enter' && this.state.searchValue)
      this.getResults();
  }

  searchField() {
    const { searchValue } = this.state;

    if (this.props.path === '/') {
      return (
        <div>
          <button 
            className='search-btn btn'
            onClick={() => this.getLatest()}
          >
            Latest Movies
          </button>
          <input 
            placeholder='Search Movies'
            className='search-input input'
            value={searchValue}
            onKeyPress={this.enterKey}
            onChange={e => this.setState({ searchValue: e.target.value })}
          />
          <button 
            className='search-btn btn'
            disabled={!searchValue}
            onClick={() => this.getResults()}
          >
            Search
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='search-field'>
        { this.searchField() }
      </div>
    );
  }
}

export default MovieContainer(Search);
