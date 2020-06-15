// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//Nested function can access the variable internal because of Closure which gives the nested function the ability to access variables outside of its function (e.g. in the parent function) but still within its lexical environment.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number) {
  let result = 0;
  for(let i = 1; i <= number; i++) {
    result = result + i;
  }
  return result;
}
console.log(summation(4));
