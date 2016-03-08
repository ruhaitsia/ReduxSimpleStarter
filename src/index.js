import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBrEwgQJYJ_pybBclMDlf9xXFmqE0t6BLo";

const App = () => {
	return (
		<div>
			<SearchBar/>
		</div>
	);
}

ReactDom.render(<App/>,document.querySelector('.container'));