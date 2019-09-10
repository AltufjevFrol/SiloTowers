import React from 'react';
import style from './TopSection.module.css'

const styleGr1 = {
	stopColor:"#616166"
}
const styleGr2 = {
	stopColor:"#9B9B9B"
}
const styleGr3 = {
	stopColor:"#48484F"
}
const styleRect = {
	fill: "url(#SVGR_TOP)"
}
let TopSection = ()=>{
	return (
			<section className={style.TopSection}>
			<svg className={style.TopSectionSvg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="154px" height="105px">
				<line stroke="#8B959F" strokeWidth="8" x1="53" y1="0" x2="101" y2="0"></line>
				<rect x="0" y="5" fill="#CBCBCB" width="154" height="5"></rect>
				<linearGradient id="SVGR_TOP" gradientUnits="userSpaceOnUse" x1="8" y1="66" x2="146" y2="66">
						<stop offset="0" style={styleGr1}></stop>
						<stop offset="0.21" style={styleGr2}></stop>
						<stop offset="1" style={styleGr3}></stop>
					</linearGradient>
				<rect x="8" y="13" style={styleRect} width="138" height="92"></rect>
			</svg>
		</section>
		)
}
export default TopSection;