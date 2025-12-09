const fs = require('fs');
function readFileSyncFile(path) {
    const dataread = fs.readFileSync(path, 'utf8');
    console.log(dataread);
}
const filePath = './file.txt'; 
readFileSyncFile(filePath);
//----------------------------