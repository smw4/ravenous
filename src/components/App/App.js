import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../logo.svg';
import './App.css';

//cut and pasted in step 3 need to import business?
const business = {
	imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
	name: 'Luca Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90,
};

//step 4
const businesses = [business, business, business, business, business, business];

//step 5 businesses={businesses}
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>ravenous</h1>
				<SearchBar />
				<BusinessList businesses={businesses} />
			</div>
		);
	}
}

export default App;
