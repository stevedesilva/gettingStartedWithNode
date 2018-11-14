let count = 0;

const job = () => {
  count += 1;
  if(count === 5) {
    clearInterval(interval);
    console.log("Done.");
  }
  console.log('Hello World : ' + count );

};

const interval = setInterval(job,1000);
//
//
// let counter = 0;
//
// const task = () => {
//   console.log('Hello World');
//   counter += 1;
//
//   if (counter === 5) {
//     console.log('Done');
//     clearInterval(intervalId);
//   }
// };
//
// const intervalId = setInterval(task, 1000);
