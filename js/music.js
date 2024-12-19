/**
 * 
 */

//どのボタンが押されたのかを確認
const btngogo = document.getElementById('gogo');
const btnrezero = document.getElementById('rezero');
const btnimpact = document.getElementById('impact');
const btn3000fever = document.getElementById('3000fever');

//イベントリスナー
btngogo.addEventListener('click',gogo);
btnrezero.addEventListener('click',rezero);
btnimpact.addEventListener('click',impact);
btn3000fever.addEventListener('click',fever3000);

function gogo(){
	const audio = new Audio('music/gogo.mp3');
	audio.play();
}

function rezero(){
	const audio = new Audio('music/rezero.mp3');
	audio.play();
}

function impact(){
	const audio = new Audio('music/impact.mp3');
	audio.play();
}

function fever3000(){
	const audio = new Audio('music/3000fever.mp3');
	audio.play();
}