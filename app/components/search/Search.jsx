import React, { Component } from 'react';
import SearchContainer from '../../containers/searchContainer/SearchContainer';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  getResults() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=74e395a1a0373d4f389e8f007c86c5e7&query=${this.state.searchValue}`)
      .then(data => data.json())
      .then(data => this.props.loadResults(data.results))
  }

  getLatest() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=74e395a1a0373d4f389e8f007c86c5e7&language=en-US')
      .then(data => data.json())
      .then(data => this.props.loadResults(data.results))
      .then(() => this.setState({ searchValue: '' }))
  }

  enterKey(e) {
    if(e.key === 'Enter' && this.state.searchValue)
      this.getResults();
  }

  render() {
    const { searchValue } = this.state
    return (
      <div className='search-field'>
        <input placeholder='Search Movies'
               className='search-input input'
               value={this.state.searchValue}
               onKeyPress={this.enterKey.bind(this)}
               onChange={(e) => this.setState({ searchValue: e.target.value })}/>
        <button className='search-btn btn'
                disabled={!this.state.searchValue}
                onClick={() => this.getResults()}>
          SEARCH
        </button>
        <button className='search-btn btn'
                disabled={!this.state.searchValue}
                onClick={() => this.getLatest()}>
          CLEAR
        </button>
      </div>
    )
  }
}

export default SearchContainer(Search);
