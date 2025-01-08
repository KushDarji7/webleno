console.log('Salutations,\n welcome to\n \trock\n\tpaper\n\tknife.');


const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

// concise if else
  userInput === 'rock' ||
  userInput === 'paper' ||
  userInput === 'knife' ?  userInput :  console.log(`ERROR: invalid move: ' ${userInput} '\n try 'rock', 'paper', or ' knife.`)

// basic if else
  // if userInput = ('rock','paper', 'scissors') {
  //   return userInput
  // }
  // else{
  //   return console.log(`ERROR: invalid move\n try 'rock', 'paper', or ' sicssors.`)
  // }

return userInput
};

const getComputerChoice = () => {
  const randomMoveNum = Math.floor(Math.random() *3);
  if(randomMoveNum === 0){
    computerChoice =  'rock';
  }else if (randomMoveNum === 1){
    computerChoice = 'paper';
  }else if (randomMoveNum === 2){
    computerChoice = 'kinfe';
} return computerChoice;

  // switch (randomMoveNum){
  //   case 0:
  //     return 'rock';
  //   case 1:
  //     return 'paper';
  //   case 2:
  //     return 'knife';
  // }

}

const determineWinner = (userChoice, computerChoice) => {
  console.log(`user:`, userChoice, `vs`, computerChoice(),`:computer`)
  console.log(`\tDetermining winner...`)

  if (userChoice === computerChoice){
    return console.log('Stalemate');
  }
  else if (userChoice == 'rock'){
    if (computerChoice == 'paper') {
      return gameDefeatMsg()
    } else {
        return gameVictoryMsg()
    }
  }
  else if (userChoice == 'paper'){
    if (computerChoice == 'knife') {
      return gameDefeatMsg()
    } else {
        return gameVictoryMsg()
    }
  }
  else if (userChoice == 'knife'){
    if (computerChoice == 'rock') {
      return gameDefeatMsg()
    } else {
        return gameVictoryMsg()
    }
  }

};

const gameVictoryMsg = () => {
 return console.log('\tVictory\nUser Win\'s')
}
const gameDefeatMsg = () => {
  return console.log('\tDefeat\nCompuer Win\'s')
}
// DEBUG 
//Deubug variables, functions and what not, not intendend for final program

console.log(`\nDEBUG`)
  const myChoice = getUserChoice('knife')

// console.log(`user:`, getUserChoice('knife'))
// console.log(`computer:`, getComputerChoice())
// console.log(`\t\tDetermining winner...`)
determineWinner(myChoice, getComputerChoice )



