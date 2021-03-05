document.addEventListener('DOMContentLoaded',() => {
	let squares = document.querySelectorAll('.square');

	squares.forEach((square) => {
		square.addEventListener('click', handleClick);
	})
})

function handleClick(event) {
	console.log(event);			//event is click
	let square = event.target;
	let position = square.id;

	if (handleMove(position)) {
		setTimeout(()=> {
			alert(`O vencedor foi ${playerTime}`);
		}, 10)
	}
	updateSquare(position);
}

function updateSquare(position) {
	let square = document.getElementById(position.toString());
	let symbol = board[position];
	square.innerHTML = `<div class="${symbol}"></div>`;
}


// var vez = 0;
// let humanPhrase = document.getElementById('humanPhrase')
// let martianPhrase = document.getElementById('martianPhrase');

// if (vez == 0) {
// 	martianPhrase.style = "opacity: 0";
// 	humanPhrase.style = "display: inline";
// 	vez = 1;
// } else {
// 	humanPhrase.style = "opacity: 0"
// 	martianPhrase.style = "display: inline";
// 	vez = 0;
// }