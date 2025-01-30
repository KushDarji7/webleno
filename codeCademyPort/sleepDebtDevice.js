

//sleep debt calculator

//determine hw many hours of sleep each night of week
const getSleepHours = (day) => {
    day = day.toLowerCase();
  
    if (day === "sunday") {
      return 10;
    } else if (day === "monday") {
      return 10;
    } else if (day === "tuesday") {
      return 10;
    } else if (day === "wednesday") {
      return 10;
    } else if (day === "thursday") {
      return 10;
    } else if (day === "friday") {
      return 10;
    } else if (day === "saturday") {
      return 7.4;
    }
  };
  
  const getTrueSleepHours = () =>
    getSleepHours("sunday") +
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday");
  
  //ideal amount of sleep in a week
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return 7 * idealHours.toFixed(3) ;

  };
  
  const calculateSleepDebt = () => {
    const trueSleepHours = getTrueSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    let restSurplus = trueSleepHours - idealSleepHours;
    let restDeficit = idealSleepHours - trueSleepHours;

    restSurplus = restSurplus.toFixed(3)
    restDeficit = restDeficit.toFixed(3)

    if (trueSleepHours === idealSleepHours) {
      console.log("User reached rest time.");
      
    } else if (trueSleepHours > idealSleepHours) {
      console.log("User exceeded rest alotment.");
      console.log ('Sleep surplus =', restSurplus);
  
  //     if trueSleepHours < idealSleepHours 
    }else{
      console.log('User needs signifcant rest.');
      console.log ('Sleep deficit =', restDeficit);
    }
  };


  console.log('User slept:\'',getTrueSleepHours(), '\' hours.');
  console.log('User rest goal:\'' ,getIdealSleepHours(), '\' hours');


  
  calculateSleepDebt();
  
  // DEBUG
  
  