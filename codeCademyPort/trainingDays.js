
// The scope of `random` is too loose

const getRandEvent = () => {
    // moved scope of variable for random math function so the variable function gets used each time the getRandEvent is called
    const random = Math.floor(Math.random() * 3);
  
    if (random === 0) {
      return "Marathon";
    } else if (random === 1) {
      return "Triathlon";
    } else if (random === 2) {
      return "Pentathlon";
    }
  };
  
  // The scope of `days` is too tight
  const getTrainingDays = (event) => {
    let days = undefined;
    if (event === "Marathon") {
      days = 50;
    } else if (event === "Triathlon") {
      days = 100;
    } else if (event === "Pentathlon") {
      days = 200;
    }
  
    return days;
  };
  
  // The scope of `name` is too tight
  // removal of block scope of variable name so that the name can be declared outside the function logs allowing reusable and functionality
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime
  
  // 1st User
  const event1 = getRandEvent();
  const days1 = getTrainingDays(event1);
  const name1 = "Vergil";
  
  logEvent(name1, event1);
  logTime(name1, days1);
  
  // 2nd user
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = "Warren";
  
  logEvent(name2, event2);
  logTime(name2, days2);
  