

console.log("User flipped " + 'queen');
console.log("User flipped " + 'king');

const cards = ['queen', "queen", "king", "king"];
let cardsInPlay = [];

cardsInPlay.length;


function checkForMatch()	{
		if (cardsInPlay.length === 2)
		if (cardsInPlay[0] === cardsInPlay[1])
		console.log("You found a match!");	
	else {
		console.log("Sorry try again");
	}
}


function flipCard (cardId)	{
	console.log("User flipped " + cards[cardId]);
	
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
}



flipCard(1);

flipCard(3);