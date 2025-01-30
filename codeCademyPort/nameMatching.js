

// Write your code below
let bobsFollowers = ["Kevin", "Victoria", "Chris", "Steve"];

let tinasFollowers = ["Victoria", "Chris", "Bolson", "Steve"];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  // console.log(bobsFollowers[i])
  for (let j = 0; j < tinasFollowers.length; j++) {
    // console.log(tinasFollowers)
    if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log("Match found : " + bobsFollowers[i]);
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
  console.log('Mutual followers : '+ mutualFollowers );
