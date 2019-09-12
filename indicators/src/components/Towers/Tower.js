import React from 'react';
import style from './Tower.module.css';
import TopSection from './TopSection/TopSection.js';
import MiddleSection from './MiddleSection/MiddleSection.js';
import BottomSection from './BottomSection/BottomSection.js';
import Titel from './Titel/Titel.js';
import Value from './Value/Value.js';
import Indicator from './Indicator/Indicator.js';
import api from '../../api.js';

class Tower extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: 50,
			min: 0,
			max: 100,
		}
		this.udateState = this.udateState.bind(this);
	}
componentDidMount(){
	setInterval(this.udateState, 1000)
}
udateState(){
	let indicator = api(this.props.id);
	this.setState({
		value: indicator.value,
		min: indicator.min,
		max: indicator.max,
	})
}
	render(){
		let color = this.state.value>=this.state.min && this.state.value<=this.state.max ? 'green' : 'red'
		return (
		<article className={style.silo}>
			<Titel id={this.props.id}>
				Уровень карналита в силосной башне №
			</Titel>
			<Value value={this.state.value} color={color}>
				%
			</Value>
			<TopSection/>
			<MiddleSection/>
			<MiddleSection/>
			<MiddleSection>
				<Indicator value={this.state.value}/>
			</MiddleSection>
			<BottomSection/>
			<Titel>
				Масса карналита
			</Titel>
			<Value value={this.props.mass} color="green"/>
		</article>
	);
	}
}

export default Tower;
