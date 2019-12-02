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

//Checks for a match, and only displays a message if 2 cards have been flipped.
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

//Logs what cards are flipped, and adds them to in play
function flipCard() {
	const cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

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

//Creates the board
function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}

//Initiates creating the board
createBoard;