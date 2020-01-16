

console.log("User flipped" + 'queen');
console.log("User flipped" + 'king');

const cards = ['queen', "queen", "king", "king"];
const cardsInPlay = [];

cardsInPlay.length;

const cardOne = cards[0];

cardsInPlay.push(cards[0]);

const cardTwo = cards[2];

cardsInPlay.push(cards[2]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])
		alert ("You found a match!");
	else {
		alert("Sorry try again");
	}
}