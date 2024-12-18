/**
 * 
 */
function fortune() {

	const fortune = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶', 'おばた'];

	document.getElementById('fortune').onclick = function() {
		let random = Math.floor(Math.random() * fortune.length);
		document.getElementById('result').innerHTML = fortune[random];
	}
}
document.addEventListener('click', fortune);