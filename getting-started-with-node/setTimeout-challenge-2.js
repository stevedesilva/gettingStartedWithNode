let count = 0;

const incrementCount = () => {
   count++;
   return count;
}

const job = (getCount,incrementCount) => {
  let count = incrementCount();
  console.log("Initial count is." + count);

  if(count > 5) {
    clearInterval(interval);
    console.log("Done.");
  }
  else {
    console.log('Hello Jo : ' + count );
  }
  incrementCount();
};

const interval = setInterval(job,1 * 1000, incrementCount);
