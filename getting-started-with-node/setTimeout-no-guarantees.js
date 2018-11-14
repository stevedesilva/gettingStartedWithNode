const job = delay => console.log('Hello forever with minimum 0.5 sec delay. Will fire after end of script!');

const interval = setTimeout(job,500);

for(let i=0; i < 1e10; i++) {
  // Block Node Synchronously
  // 10 000 000 000
}
