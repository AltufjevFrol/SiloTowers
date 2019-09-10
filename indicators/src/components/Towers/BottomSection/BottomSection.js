import React from 'react';
import style from './BottomSection.module.css'

const styleGr1 = {
	stopColor:"#616166"
}
const styleGr2 = {
	stopColor:"#9B9B9B"
}
const styleGr3 = {
	stopColor:"#48484F"
}
let BottomSection = ()=>{
	return (
			<section className={style.bottomSection}>
			<svg className={style.botomSectionSvg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="154px" height="79px">
				<rect x="0" y="0" fill="#CBCBCB" width="154" height="5"></rect>
				<polygon fill="url(#SVGR_BOTTOM)" points="68,79 8,8 146,8 86,79"></polygon>
				<linearGradient id="SVGR_BOTTOM" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="138" y2="0">
								<stop offset="0" style={styleGr1}></stop>
								<stop offset="0.21" style={styleGr2}></stop>
								<stop offset="1" style={styleGr3}></stop>
				</linearGradient>
			</svg>
		</section>
		)
}
export default BottomSection;