console.log("q1");

console.log(fib_seq(10));

console.log("q2");
console.log(q2());

console.log("q3");
console.log(q3());

document.write("<br>");

//q4
document.write("q4");
let arr4 = [7, "a", "a", "a", "a", 3, 4, "a", 7, "a", 4, 7, 3];
let n = arr4.length;
document.write(mostFrequent(arr4, n));

document.write("<br>");
document.write("<br>");

//q5
document.write("q5");
document.write("<br>");



var arrayq5 = [1, 2, 3, 4, 5, 6, 7];
document.write("before shuffling: ", arrayq5);
document.write("<br>");

var arrq5 = shuffleArray(arrayq5);
document.write("After shuffling: ", arrq5);

document.write("<br>");
document.write("<br>");




// function with parameter a as an input for how much of the sequence to print
function fib_seq(sequenceLength) {
  //base cases
  if (sequenceLength == 1) {
    return [0, 1];
  } else {
    var b = fib_seq(sequenceLength - 1);
    b.push(b[b.length - 1] + b[b.length - 2]);
    return b;
  }
}

function q2() {
  var a, b, chr;
  for (a = 1; a <= 6; a++) {
    for (b = 1; b < a; b++) {
      chr = chr + " * ";
    }
    console.log(chr);
    chr = " ";
  }
}

function q3() {
  //Original string
  var arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];

  //Sorting the array

  document.write("unsorted array<br>" + arr);
  document.write("<br>");

  document.write("sorted array<br>", arr.sort());
  document.write("<br>");
}

//q4 mostfrequent item as O(n) time comp
function mostFrequent(arr, n) {
  // Sort the array
  arr.sort();

  // find the max frequency using linear traversal
  let max_count = 1,
    res = arr[0];
  let curr_count = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] == arr[i - 1]) curr_count++;
    else {
      if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[i - 1];
      }
      curr_count = 1;
    }
  }

  // If last element is most frequent
  if (curr_count > max_count) {
    max_count = curr_count;
    res = arr[n - 1];
  }
  document.write("most frequent # in array: ", arr4);
  document.write("<br>");
  document.write("most frequent #:  ");

  return res;
}

function shuffleArray(arrayq5) {
  for (var i = arrayq5.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = arrayq5[i];
    arrayq5[i] = arrayq5[j];
    arrayq5[j] = temp;
  }

  return arrayq5;
}
