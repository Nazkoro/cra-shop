import React from 'react';
import ReactDOM from 'react-dom';
import CountConters from './CountConters';
import { observer } from 'mobx-react-lite';
// import PageCounter from './PageCounter'



// import App from './App';


ReactDOM.render(
	<CountConters />,
	document.getElementById('root')
);