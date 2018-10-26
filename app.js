/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var activePlayer, score, roundScore, gamePlaying, dobleSix , gameScore;
dobleSix= [];
gameScore =100;
init();


//document.querySelector('#score-' + activePlayer).textContent = roundScore;


// Throw dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;


    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'black';
    diceDOM.src = 'dice-' + dice + '.png';

    var diceDOM1 = document.querySelector('.dice1');
    diceDOM1.style.display = 'black';
    diceDOM1.src = 'dice-' + dice1 + '.png';
    document.querySelector('#current-' + activePlayer).textContent = dice;
    document.querySelector('#current-' + activePlayer).textContent = dice1;


    if(dice !== 1 && dice1 !== 1){
      roundScore +=dice + dice1;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
//        dobleSix.push(dice, dice1);
//            if(dobleSix.length >= 3){
//                if(dice === 6 || dice1 === 6){
//                    for(var i = dobleSix.length-1; i > dobleSix.length-3 ; i--){
//                        if(dobleSix[i-1] === 6){
//                            if(dobleSix[i-2] === 6){
//                               resetScore();
//                               }
//                   }
//               }
//           }
//        }
    }
    else{
       nextPlayer();
    }
       }
});

// Hold button
 document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
         score[activePlayer] += roundScore;
     document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
     if(score[activePlayer] >= gameScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;
        }
      else {
          nextPlayer();
           }
    }
        });

// New game button
document.querySelector('.btn-new').addEventListener('click', function(){
    gameScore = 100;
    init();
});

// Change total score
document.querySelector('.btn-che-sc').addEventListener('click', function(){
    var newScore = prompt('New total score');
    gameScore = newScore;
    if(gameScore === ''){
        document.querySelector('.final-score').textContent = 'Add value!';
    }
    else{
    document.querySelector('.final-score').textContent = 'Final score is: ' + gameScore;
    init();
    }
});

// change player function
function nextPlayer(){

     if(activePlayer === 0){
            document.getElementById('current-0').textContent = '0';
           activePlayer = 1;
           }
        else if (activePlayer === 1 ){
            document.getElementById('current-1').textContent = '0';
            activePlayer = 0;
        }
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
    roundScore = 0;
    dobleSix = [];
}

// Init function
function init(){
    activePlayer = 0;
    score = [0,0];
    roundScore = 0;
    gamePlaying = true;
    dobleSix = [];

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.final-score').textContent = 'Final score is: ' + gameScore;
}


// Reset score after double 6
function resetScore(){
    score[activePlayer] = 0;
    dobleSix = [];
    document.getElementById('score-' + activePlayer).textContent = '0';
    alert("Doubel 6! Your result is reset!!!");
}
















