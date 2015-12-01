function card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function Deck() {
  var cards = [];

  this.getCards = function() {
    return cards;
  }

  this.reset = function() {
    cards = []; // remove remaining cards;
    this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

    for (var s = 0; s < this.suits.length; s++) {
      for (var n = 0; n < this.names.length; n++) {
        var value = n + 1;
        if (value > 10) {
          value = 10;
        }
        cards.push(new card(value, this.names[n], this.suits[s]));
      }
    }
  };

  this.deal = function() {
    if (cards.length === 0) {
      return;
    }
    return cards.shift();
  };

  this.shuffle = function() {
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  };

}


function Player(name, deck) {
  this.name = name;
  this.deck = deck;
  this.hand = [];
  this.takeaCard = function() {
    this.hand.push(this.deck.deal());
  };
  this.discard = function(n) {
    if (n > this.hand.length) {
      return;
    }
    this.hand.splice(n, 1);
  }
}

var deck = new Deck();
deck.reset();
deck.shuffle();
player1 = new Player("Dodo", deck);


player1.takeaCard();


console.log(player1.hand);
player1.takeaCard();
console.log(player1.hand);
player1.discard(4);
console.log(player1.hand);
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.getCards().length);
// deck.reset();
// console.log(deck.getCards().length);
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.getCards().length);
