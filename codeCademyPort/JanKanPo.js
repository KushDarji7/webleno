console.log("Salutations,\n welcome to\n\trock\tpaper\tknife");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  //concise if else
  userInput === "rock" || userInput === "paper" || userInput === "knife" ||userInput === "bomb" || userInput === "bankai"
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
  if (userChoice === 'bomb' || 'bankai') {
    return gameVictoryMsg();
  }
  //user chooses rock
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return gameDefeatMsg();
    } else {
      return gameVictoryMsg();
    }
  }
  //user choose paper
  if (userChoice === "paper") {
    if (computerChoice === "knife") {
      return gameDefeatMsg();
    } else {
      return gameVictoryMsg();
    }
  }
  //user choose knife
  if (userChoice === "knife") {
    if (computerChoice === "rock") {
      return gameDefeatMsg();
    } else {
      return gameVictoryMsg();
    }
  }
  //wild card choose
  if (userChoice === "bomb") {
    return gameVictoryMsg();
  }
};

//  !! change user choice/move here !!
const playGame = () => {
  const userChoice = getUserChoice("bomb");
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
  //if bomb/ Bankai move is played
    console.log("Victory, User Win's");
};

playGame();

// DEBUG
//Debug variables, functions and what not, not intendend for final program

// console.log(`\nDEBUG`)
