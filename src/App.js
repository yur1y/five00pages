import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/Page';
import SearchView from './components/PageView';

class App extends Component {
  render() {
    return (
      <div className="container">
          <SearchForm />
          <SearchView />
      </div>
    );
  }
}

export default App;
