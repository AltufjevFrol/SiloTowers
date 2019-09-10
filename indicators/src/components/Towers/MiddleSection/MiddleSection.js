import React from 'react';
import style from './MiddleSection.module.css'

const styleGr1 = {
	stopColor:"#616166"
}
const styleGr2 = {
	stopColor:"#9B9B9B"
}
const styleGr3 = {
	stopColor:"#48484F"
}

let MiddleSection = ()=>{
	return (
			<section className={style.MiddleSection}>
			<svg className={style.MiddleSectionSvg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="154px" height="100px">
				<rect x="0" y="0" fill="#CBCBCB" width="154" height="5"></rect>
				<linearGradient id="SVGR_MIDDLE1" gradientUnits="userSpaceOnUse" x1="8" y1="56" x2="146" y2="56">
						<stop offset="0" style={styleGr1}></stop>
						<stop offset="0.21" style={styleGr2}></stop>
						<stop offset="1" style={styleGr3}></stop>
					</linearGradient>
				<rect x="8" y="8" fill="url(#SVGR_MIDDLE1)" width="138" height="92"></rect>
			</svg>
		</section>
		)
}
export default MiddleSection;
