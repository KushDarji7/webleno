
const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val +2
    // variable that assigned to a callback functions, allows the callback functions to be used in this functions along with the passed variables in the invocation of the parent functions 
    let checkB = func(val)
  
    if ( checkA === checkB){
      return func(val);
    }else return 'inconsistent results'
  }
  
  console.log(checkConsistentOutput(addTwo, 3));
  