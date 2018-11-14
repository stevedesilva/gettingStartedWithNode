const path = require('path');
const fs = require('fs');

const files = ['dddd','.bash_profile', '.bash_history'];

files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    console.log('File path is', filePath);
    const data = fs.readFileSync(filePath);
    // const data = fs.readFileSync(filePath,'utf-82');
    console.log('File data is', data);
  } catch (err) {
    if(err.code === 'ENOENT') {
      console.log('File not found');
    } else {
      throw err;
    }
  }
});
