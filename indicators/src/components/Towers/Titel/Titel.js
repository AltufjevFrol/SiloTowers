import React from 'react';
import style from './Titel.module.css'

let Titel = (prop)=>{
	return (
		<section className={style.title}>
			{prop.children} {prop.id}
		</section>
		)
}
export default Titel;