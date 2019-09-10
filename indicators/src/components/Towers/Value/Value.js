import React from 'react';
import style from './Value.module.css'
let Value = (prop)=>{
	let styleColor = {
		borderBottomColor: prop.color,
	}
	return (
		<section className={style.Value} style={styleColor}>
			{prop.value}
		</section>
		)
}
export default Value;