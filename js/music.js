/**
 * 
 */
const btn = document.getElementById('gogo');

btn.addEventListener('click',gogo);

function gogo(){
	const audio = new Audio('music/gogo.mp3');
	audio.play();
}
