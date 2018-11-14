// Challenge 1:
//
//   Print "Hello World" forever. Starting with a delay of 1 second
//   but then incrementing the delay by 1 second each time.
//   The second time will have a delay of 2 seconds
//   The third time will have a delay of 3 seconds.
//
//   Include the delay in the printed message
//   Hello World. 1
//   Hello World. 2
//   Hello World. 3
//   ...
//
//   Constraints: You can only use const (no let or var)

// // My Solution
// const seed = 0;
//
// const task = (incrementCounter, seed) => {
//   const counter = seed + 1;
//   const timer = seed * 1000;
//   console.log('Hello World. ' + counter);
//   setTimeout(task, timer, incrementCounter, counter);
// };
//
// const incrementCounter = (counter) => {
//   return counter + 1;
// }
//
// setTimeout(task, 1000, incrementCounter, seed);


// official solution
const greeting = delay =>
  setTimeout(()=> {
    console.log('Hello World. ' + delay);
    greeting(delay + 1);
  }, delay * 1000);

greeting(1);
