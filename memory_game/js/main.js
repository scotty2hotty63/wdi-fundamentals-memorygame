//Cards in game
const cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];
//Cards in play, empty at start
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		//console.log("You found a match!");
		alert("You found a match!");
	} else if (cardsInPlay.length === 2) {
		//console.log("Sorry try again.");
		alert("Sorry try again.");
	} else {

	}
};

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
		//Check to see if 2 cards have been played AND match
	/*if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	} else {
		alert("Sorry try again.")
	}*/
};


flipCard(0);
flipCard(2);