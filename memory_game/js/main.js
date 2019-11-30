//Cards in game
const cards = ["Queen", "Queen", "King", "King"];
//Cards in play, empty at start
const cardsInPlay = [];
//First card in array
const cardOne = cards[0];
//Add card to in play
cardsInPlay.push(cardOne);
//Test work, display in console
console.log("User flipped" + " " + cardsInPlay[0]);
//Second card flipped
const cardTwo = cards[1];
//Add second card to in play
cardsInPlay.push(cardTwo);
//Test message in console
console.log("User flipped" + " " + cardsInPlay[1]);
//Check to see if 2 cards have been played
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
} else {
	alert("Sorry try again.")
}
