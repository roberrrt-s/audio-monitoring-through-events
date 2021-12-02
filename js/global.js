let music = new Audio('../assets/muziek.mp3');
let button = document.querySelector('button');
let text = document.querySelector('.text');

music.volume = 1;

music.addEventListener('timeupdate', event => {
	console.log(Math.round(event.timeStamp / 1000))

	updateText(Math.round(event.timeStamp / 1000))
})

button.addEventListener('click', playMusic)

function playMusic() {
	music.play();
}

function updateText(time) {
	switch(time) {
		case 2:
			console.log('na twee seconden zie je dit');
			text.textContent = 'LALALALALALAA'
			text.classList.add('draai-ff-rond');
			break;
		case 5:
			text.textContent = '';
			text.classList.remove('draai-ff-rond');
			break;
		case 7:
			console.log('nu zie je dit');
			text.textContent = 'OMG ANDERE TEKST HOLLYYY SHIIIIT'
			break;
		default:
			console.log('no update');
	}
}