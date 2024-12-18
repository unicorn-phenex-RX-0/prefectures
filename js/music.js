/**
 * 
 */

//どのボタンが押されたのかを確認
const btngogo = document.getElementById('gogo');
const btnrezero = document.getElementById('rezero');
//const btnimpact = document.getElementById('impact');

//イベントリスナー
btngogo.addEventListener('click',gogo);
btnrezero.addEventListener('click',rezero);
//btnimpact.addEventListener('click',impact);

function gogo(){
	const audio = new Audio('music/gogo.mp3');
	audio.play();
}

function rezero(){
	const audio = new Audio('music/rezero.mp3');
	audio.play();
}

//function impact(){}