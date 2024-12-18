/**
 * 
 */
//どのボタンが押されたのかを確認
const gogo = document.getElementById('gogo');
const rezero = document.getElementById('rezero');

//イベントリスナー
gogo.addEventListener('click',gogo);
rezero.addEventListener('click',rezero);

function gogo(){
	const audio = new Audio('music/gogo.mp3');
	audio.play();
}

function rezero(){
	const audio = new Audio('music/rezero.mp3');
	audio.play();
}