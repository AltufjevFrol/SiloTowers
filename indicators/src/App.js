import React from 'react';
import './App.css';
import TopSection from './components/Towers/TopSection/TopSection.js'
import MiddleSection from './components/Towers/MiddleSection/MiddleSection.js'
import BottomSection from './components/Towers/BottomSection/BottomSection.js'
import Titel from './components/Towers/Titel/Titel.js'
import Value from './components/Towers/Value/Value.js'
function App() {
	return (
		<div className="silo">
			<Titel text="Уровень карналита в силосной башне №" id="1"/>
			<Value value="100%" color="green"/>
			<TopSection/>
			<MiddleSection/>
			<MiddleSection/>
			<MiddleSection/>
			<BottomSection/>
			<Titel text="Масса карналита"/>
			<Value value="1000" color="green"/>
		</div>
	);
}

export default App;
