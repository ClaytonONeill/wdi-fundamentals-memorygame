console.log("up and running!");


const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "https://i.imgur.com/wCRdEtA.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "https://i.imgur.com/pgMOJ9g.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "https://i.imgur.com/IPZebc7.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "https://i.imgur.com/g1diUX9.png"
	}
];

let cardsInPlay = [];


function createBoard()	{
	for (let i = 0; i < cards.length; i++)	{
			
	const cardElement = document.createElement('img');	 
		 cardElement.setAttribute('src', "images/back.png");
		 cardElement.setAttribute('data-id', i);
		 cardElement.addEventListener('click', flipCard);

	document.getElementById('game-board').appendChild(cardElement);
	}
}

	
function checkForMatch ()	{
	
	if (cardsInPlay.length === 2)	
	if(cardsInPlay[0] === cardsInPlay[1])	{
		alert("you found a match!");
	}
	else	{
		alert("sorry, try again.");
	}
}

function flipCard()	{

	let cardId = this.getAttribute('data-id');

	this.setAttribute('src', cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	checkForMatch();

	console.log(cards[cardId].cardImage);

}	

createBoard();




















