const fs = require('fs');

fs.readFile(__filename, function cb1(err, data) {
  console.log('CB1 - Reading file data is', data);
  fs.writeFile(__filename + '.copy', data, function cb2(err) {
    console.log('CB2 - Writen file data', data);
  });

});

console.log('TEST');
