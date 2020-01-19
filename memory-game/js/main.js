console.log("up and running!");


const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

let cardsInPlay = [];


function checkForMatch ()	{
	if (cardsInPlay.length === 2)	
	if(cardsInPlay[0] === cardsInPlay[1])	{
		console.log("you found a match!");
	}
	else	{
		console.log("sorry, try again.");
	}
}


function flipCard(cardId)	{

	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suit);
	console.log("User flipped " + cards[cardId].cardImage);
	
	cardsInPlay.push(cardId).rank;

	checkForMatch();
}	
		



flipCard(0);

flipCard(2);
	


