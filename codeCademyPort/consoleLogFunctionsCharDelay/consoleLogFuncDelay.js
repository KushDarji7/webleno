

function myConsole(message, delay = 200) {

  let index = 0;
  
  function printCharacter() {
    if (index < message.length) {
      process.stdout.write(message.charAt(index)); // Print one character
      index++;
      setTimeout(printCharacter, delay); // Delay before printing the next character
    } else {
      console.log(); // To move to the next line after the animation is done
    }
  }

  printCharacter();
}

// Example usage
myConsole("Hello, this is an animated message!", 25); // Delay of 100ms per character
