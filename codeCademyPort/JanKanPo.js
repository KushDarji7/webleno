console.log("Salutations,\n welcome to\n\trock\tpaper\tknife");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  //concise if else
  userInput === "rock" || userInput === "paper" || userInput === "knife"
    ? userInput
    : console.log(
        `ERROR: invalid move: ' ${userInput} '\n try 'rock', 'paper', or ' knife.`
      );

  return userInput;
};

const getComputerChoice = () => {
  const randomMoveNum = Math.floor(Math.random() * 3);
  if (randomMoveNum === 0) {
    return "rock";
  } else if (randomMoveNum === 1) {
    return "paper";
  } else if (randomMoveNum === 2) {
    return "knife";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return gameStaleMsg();
  }
  //user chooses rock
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      gameDefeatMsg();
    } else {
       gameVictoryMsg();
    }
  }
  //user choose paper
  if (userChoice === "paper") {
    if (computerChoice === "knife") {
       gameDefeatMsg();
    } else {
      gameVictoryMsg();
    }
  }
  //user choose knife
  if (userChoice === "knife") {
    if (computerChoice === "rock") {
        gameDefeatMsg();
    } else {
       gameVictoryMsg();
    }
  }
  //wild card choose
//   if (userChoice === "bomb") {
//     return gameVictoryMsg();
//   }
};
// !!CHANGE USER VARIABLE HERE TO MAKE USER GAME CHOICE!!
const playGame = () => {
  const userChoice = getUserChoice("knife");
  const computerChoice = getComputerChoice();

  console.log(`user:${userChoice}\n\t|vs|\n bot:${computerChoice}`);

  determineWinner(userChoice, computerChoice);
};

const gameStaleMsg = () => {
  console.log(`\tDetermining winner...`);
  console.log("Stalemate");
};
const gameVictoryMsg = () => {
  console.log(`\tDetermining winner...`);
  console.log("Victory, User Win's");
};
const gameDefeatMsg = () => {
  console.log(`\tDetermining winner...`);
  console.log("Defeat\nComputer Win's");
};
const gameNoContMsg = () => {
  //if bomb || Bankai move is played
};

playGame();



// DEBUG
//Debug variables, functions and what not, not intendend for final program

// console.log(`\nDEBUG`)
// 