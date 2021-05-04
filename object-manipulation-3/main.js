console.log('Lodash is loaded:', typeof _ !== 'undefined');

var playerList = [
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

function playGame(players, handSize) {
  var $shuffledDeck = _.shuffle(deck);
  var tiebreaker = false;
  var ties = [];
  var tiedPlayers = [];
  var newList = [];
  var cardPull = 0;
  var pulledCard = {};
  var winner = 0;
  var score = 0;
  var highestScore = 0;

  for (var i = 0; i < handSize; i++) {
    for (var j = 0; j < players.length; j++) {
      cardPull = _.random($shuffledDeck.length - 1);
      pulledCard = $shuffledDeck[cardPull];
      players[j].hand.push(pulledCard);
      $shuffledDeck.splice(cardPull, 1);
    }
  }

  for (var k = 0; k < players.length; k++) {
    for (var p = 0; p < handSize; p++) {
      if (players[k].hand[p].rank === 'Ace') {
        score += 11;
      } else if (players[k].hand[p].rank === 'Two') {
        score += 2;
      } else if (players[k].hand[p].rank === 'Three') {
        score += 3;
      } else if (players[k].hand[p].rank === 'Four') {
        score += 4;
      } else if (players[k].hand[p].rank === 'Five') {
        score += 5;
      } else if (players[k].hand[p].rank === 'Six') {
        score += 6;
      } else if (players[k].hand[p].rank === 'Seven') {
        score += 7;
      } else if (players[k].hand[p].rank === 'Eight') {
        score += 8;
      } else if (players[k].hand[p].rank === 'Nine') {
        score += 9;
      } else if (players[k].hand[p].rank === 'Ten' || players[k].hand[p].rank === 'Jack' ||
      players[k].hand[p].rank === 'Queen' || players[k].hand[p].rank === 'King') {
        score += 10;
      }
      players[k].score += score;
      score = 0;
      console.log('Current Score', players[k].name, players[k].score);
    }
  }

  for (var h = 0; h < players.length; h++) {
    for (var o = 0; o < players.length; o++) {
      if (h !== o && players[h].score >= players[o].score && players[h].score > highestScore) {
        highestScore = players[h].score;
      }
    }
  }

  for (var q = 0; q < players.length; q++) {
    for (var y = 0; y < players.length; y++) {
      if (q !== y && players[q].score === players[y].score && players[q].score === highestScore &&
        ties.includes(q) !== true) {
        tiebreaker = true;
        ties.push(q);
      }
    }
  }

  if (tiebreaker === true) {
    console.log('Tiebreaker!');
    for (var x = 0; x < ties.length; x++) {
      console.log('tie index:', ties[x]);
      tiedPlayers.push(players[ties[x]]);
      console.log(players[ties[x]].name, players[ties[x]].score);
    }
    tiebreaker = false;
    for (var z = 0; z < tiedPlayers.length; z++) {
      newList[z] = {
        name: tiedPlayers[z].name,
        hand: [],
        score: 0
      };
    }
    console.log(newList);
    console.log('Tied Players', tiedPlayers);
    playGame(newList, handSize);
  } else {
    for (var m = 0; m < players.length; m++) {
      for (var n = 0; n < players.length; n++) {
        if (m !== n && players[m].score > players[n].score && players[m].score === highestScore) {
          winner = m;
        }
      }
    }
    console.log('Winner:', players[winner]);
    return players[winner];
  }
}

playGame(playerList, 1);
