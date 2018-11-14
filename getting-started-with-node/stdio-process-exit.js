// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(chunk);
//   }
// });

// process.stdin.pipe(process.stdout);

setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
  console.log('Process will exit now. See you later!');
});

console.log('Hello!');
