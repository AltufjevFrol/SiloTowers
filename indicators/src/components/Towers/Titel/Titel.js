import React from 'react';
import style from './Titel.module.css'

let Titel = (prop)=>{
	return (
		<section className={style.title}>
			{prop.text}{prop.id}
		</section>
		)
}
export default Titel;