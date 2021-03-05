document.addEventListener('DOMContentLoaded',() => {
	let squares = document.querySelectorAll('.square');

	squares.forEach((square) => {
		square.addEventListener('click', handleClick);
	})
})


let humanPhrase = document.getElementById('humanPhrase');
let martianPhrase = document.getElementById('martianPhrase');
let h1 = document.querySelector('#h1Title');

function handleClick(event) {

	switch (playerTime) {
		case 1:		// playertime is switched because it changes when onclick
			martianPhrase.style = "opacity: 0";
			humanPhrase.style = "display: inline";
			break;
	
		case 0:
			humanPhrase.style = "opacity: 0"
			martianPhrase.style = "display: inline";
			break;
	}
	
	//event is click
	let square = event.target;
	let position = square.id;

	if (handleMove(position)) {
		setTimeout(()=> {

			if(playerTime == 0) {
				alert(`Humans won! the aliens will go back to their original home!`);
				reset();
				humanWins++
				h1.innerText = `Humans[${humanWins}] x [${martianWins}]Martians`;
			} else {
				alert(`Aliens won! now the humans are kept in zoos!`);
				reset();
				martianWins++;
				h1.innerText = `Humans[${humanWins}] x [${martianWins}]Martians`;
			}
		}, 10)
	}
	updateSquare(position);
}

function updateSquare(position) {
	let square = document.getElementById(position.toString());
	let symbol = board[position];
	square.innerHTML = `<div class="${symbol}"></div>`;
}



