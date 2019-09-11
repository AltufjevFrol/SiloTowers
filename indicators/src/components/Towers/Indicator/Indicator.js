import React from 'react';
import style from './Indicator.module.css'

let Indicator = (prop)=>{
	let height = 400*prop.value/100
	let styleHeight = {
		height: height+'px',
	}
	return (
			<div style={styleHeight} className={style.indicator}></div>
		)
}

export default Indicator;
