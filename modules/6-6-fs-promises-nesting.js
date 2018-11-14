const fs = require('fs').promises;

async function main() {
  const data = await fs.readFile(__filename);
  console.log('Promise File data is', data);
  const writedata = await fs.writeFile(__filename + '.copy', data);
  console.log('Promise Write data ', writedata);
}

main();


console.log('TEST');
