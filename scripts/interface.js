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

	handleMove(position);
	updateSquares();
}

function updateSquares(params) {
	let squares = document.querySelectorAll('.square');

	squares.forEach((square) => {
		let position = square.id;
		let symbol = board[position];

		if (symbol != '') {
			square.innerHTML = `<div class="${symbol}"></div>`
		}
	})
}