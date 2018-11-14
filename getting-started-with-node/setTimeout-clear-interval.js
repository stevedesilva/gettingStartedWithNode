const job = delay => console.log('Hello forever with ' + delay + ' delay.');

const fourSecsTimeout = 4 * 1000;

const interval = setInterval(job,fourSecsTimeout, '4');

clearTimeout(interval);

// setImmediate
// setInterval
// clearTimeout
// clearImmediate
