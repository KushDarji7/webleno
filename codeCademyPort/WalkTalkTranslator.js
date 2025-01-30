/*
Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

let myinput = "You never walk Alone."
// let myinput = 'turpentine and turtles'

const vowels = [ "a", "e", "i", "o", "u"];

let resultArray = []
let resultString

for (let i = 0; i < myinput.length; i++){
  // position of this if statment is so the perfomed check is for every letter in the input
    if (myinput[i] === 'e'){
    // console.log(input[i])
      resultArray.push(myinput[i])
    }
        if (myinput[i] === 'u'){
    // console.log(input[i])
      resultArray.push(myinput[i])
    }

  // console.log(i)
  for (let j = 0; j < vowels.length; j++){
    if (myinput[i] === vowels[j]){
    // console.log(input[i])
      resultArray.push(myinput[i])
    }
 
  }
}

// OUTPUT

resultString = resultArray.join('').toUpperCase()
console.log(resultString)
