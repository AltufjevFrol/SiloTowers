class Indicator {
	constructor(id){
		function getRandomNum(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		this.id = id.toString();
		this.value = getRandomNum(0, 100);
		this.min = getRandomNum(0, 40);
		this.max = getRandomNum(60, 100);
	}
}

function getIndicator(id){
	return new Indicator(id);
}
export default getIndicator;