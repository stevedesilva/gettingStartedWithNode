const job = delay => {
  console.log('Hello forever with ' + delay + ' delay.');
};

const fourSecsTimeout = 4 * 1000;

setInterval(job,fourSecsTimeout, '4');
