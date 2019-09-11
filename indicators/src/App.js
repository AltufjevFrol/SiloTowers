import React from 'react';
import './App.css';
import Tower from './components/Towers/Tower.js'

function App() {
	return (
		<div id="indicators">
			<Tower id="1" mass="1065"/>
			<Tower id="2" mass="998"/>
			<Tower id="3" mass="578"/>
			<Tower id="4" mass="967"/>
			<Tower id="5" mass="1365"/>
			<Tower id="6" mass="1143"/>
			<Tower id="7" mass="856"/>
			<Tower id="8" mass="956"/>
		</div>
	);
}

export default App;
