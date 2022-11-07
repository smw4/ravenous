import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>ravenous</h1>
				<SearchBar />
				<BusinessList />
			</div>
		);
	}
}

export default App;
