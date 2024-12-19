/**
 * 
 */
function fortune() {

	const fortune = { "大吉": 10, "吉": 10, "中吉": 10, "小吉": 10, "末吉": 10, "凶": 10, "大凶": 10, "おばた": 30, };

	document.getElementById('fortune').onclick = function() {
		let random = Math.floor(Math.random() * 100);
		let rate = 0;
		for (const re in fortune) {
			rate += fortune[re]
			if (random <= rate) {
				result = re
				break
			}
		}
		document.getElementById('result').innerHTML = result;
	}
}
document.addEventListener('click', fortune);