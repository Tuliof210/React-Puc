import React from 'react';
import './App.style.css';

import Tasks from './components/Tasks/Tasks';

const App = props => {
	return (
		<div className='container'>
			<h1>Lista de tarefas to {props['name']}</h1>
			<Tasks />
		</div>
	);
};

export default App;
