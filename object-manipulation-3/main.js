console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Steve',
    hand: [],
    score: 0
  },
  {
    name: 'Dave',
    hand: [],
    score: 0
  },
  {
    name: 'Kevin',
    hand: [],
    score: 0
  },
  {
    name: 'William',
    hand: [],
    score: 0
  }
];

var deck = [
  {
    rank: 'Ace',
    suit: 'Clubs'
  },
  {
    rank: 'Two',
    suit: 'Clubs'
  },
  {
    rank: 'Three',
    suit: 'Clubs'
  },
  {
    rank: 'Four',
    suit: 'Clubs'
  },
  {
    rank: 'Five',
    suit: 'Clubs'
  },
  {
    rank: 'Six',
    suit: 'Clubs'
  },
  {
    rank: 'Seven',
    suit: 'Clubs'
  },
  {
    rank: 'Eight',
    suit: 'Clubs'
  },
  {
    rank: 'Nine',
    suit: 'Clubs'
  },
  {
    rank: 'Ten',
    suit: 'Clubs'
  },
  {
    rank: 'Jack',
    suit: 'Clubs'
  },
  {
    rank: 'Queen',
    suit: 'Clubs'
  },
  {
    rank: 'King',
    suit: 'Clubs'
  },
  {
    rank: 'Ace',
    suit: 'Diamonds'
  },
  {
    rank: 'Two',
    suit: 'Diamonds'
  },
  {
    rank: 'Three',
    suit: 'Diamonds'
  },
  {
    rank: 'Four',
    suit: 'Diamonds'
  },
  {
    rank: 'Five',
    suit: 'Diamonds'
  },
  {
    rank: 'Six',
    suit: 'Diamonds'
  },
  {
    rank: 'Seven',
    suit: 'Diamonds'
  },
  {
    rank: 'Eight',
    suit: 'Diamonds'
  },
  {
    rank: 'Nine',
    suit: 'Diamonds'
  },
  {
    rank: 'Ten',
    suit: 'Diamonds'
  },
  {
    rank: 'Jack',
    suit: 'Diamonds'
  },
  {
    rank: 'Queen',
    suit: 'Diamonds'
  },
  {
    rank: 'King',
    suit: 'Diamonds'
  },
  {
    rank: 'Ace',
    suit: 'Hearts'
  },
  {
    rank: 'Two',
    suit: 'Hearts'
  },
  {
    rank: 'Three',
    suit: 'Hearts'
  },
  {
    rank: 'Four',
    suit: 'Hearts'
  },
  {
    rank: 'Five',
    suit: 'Hearts'
  },
  {
    rank: 'Six',
    suit: 'Hearts'
  },
  {
    rank: 'Seven',
    suit: 'Hearts'
  },
  {
    rank: 'Eight',
    suit: 'Hearts'
  },
  {
    rank: 'Nine',
    suit: 'Hearts'
  },
  {
    rank: 'Ten',
    suit: 'Hearts'
  },
  {
    rank: 'Jack',
    suit: 'Hearts'
  },
  {
    rank: 'Queen',
    suit: 'Hearts'
  },
  {
    rank: 'King',
    suit: 'Hearts'
  },
  {
    rank: 'Ace',
    suit: 'Spades'
  },
  {
    rank: 'Two',
    suit: 'Spades'
  },
  {
    rank: 'Three',
    suit: 'Spades'
  },
  {
    rank: 'Four',
    suit: 'Spades'
  },
  {
    rank: 'Five',
    suit: 'Spades'
  },
  {
    rank: 'Six',
    suit: 'Spades'
  },
  {
    rank: 'Seven',
    suit: 'Spades'
  },
  {
    rank: 'Eight',
    suit: 'Spades'
  },
  {
    rank: 'Nine',
    suit: 'Spades'
  },
  {
    rank: 'Ten',
    suit: 'Spades'
  },
  {
    rank: 'Jack',
    suit: 'Spades'
  },
  {
    rank: 'Queen',
    suit: 'Spades'
  },
  {
    rank: 'King',
    suit: 'Spades'
  }
];

var $shuffledDeck = _.shuffle(deck);
var $shuffledDeck2 = _.shuffle(deck);

var cardPull = 0;
var pulledCard;

for (var i = 0; i < players.length; i++) {
  cardPull = _.random(51);
  console.log(cardPull);
  pulledCard = $shuffledDeck[cardPull];
  players[i].hand.push(pulledCard);
  $shuffledDeck.splice(pulledCard, 1);
}
for (var j = 0; j < players.length; j++) {
  cardPull = _.random(51);
  console.log(cardPull);
  pulledCard = $shuffledDeck2[cardPull];
  players[i].hand.push(pulledCard);
  $shuffledDeck2.splice(pulledCard, 1);
}

var score = 0;

for (var k = 0; k < players.length; k++) {
  if (players[k].hand[0] === 'Ace') {
    score += 11;
  } else if (players[k].hand[0] === 'Two') {
    score += 11;
  } else if (players[k].hand[0] === 'Three') {
    score += 11;
  } else if (players[k].hand[0] === 'Four') {
    score += 11;
  } else if (players[k].hand[0] === 'Five') {
    score += 11;
  } else if (players[k].hand[0] === 'Six') {
    score += 11;
  } else if (players[k].hand[0] === 'Seven') {
    score += 11;
  } else if (players[k].hand[0] === 'Eight') {
    score += 11;
  } else if (players[k].hand[0] === 'Nine') {
    score += 11;
  } else if (players[k].hand[0] === 'Ten') {
    score += 11;
  }
  players[k].score = score;
}
