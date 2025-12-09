// Q10
// const fs = require('fs');
// function delateasync(path) {
//     fs.unlink(path, (err) => {
//         if (err) {
//             console.error(`Error deleting file: ${err}`);
//             return;
//         }
//     });
// }
// const filePath = 'path/to/your/file.txt';
// delateasync(filePath);
//----------------------------
// Q11
// const fs = require('fs')
// function createDirAsync(path) {
//     fs.mkdirSync(path);
//     console.log('Directory created successfully');

// }
// const dirPath = "path";
// createDirAsync(dirPath);
//----------------------------
// Q12
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();
// myEmitter.on('start', () => {
//     console.log('Event started');
// });
// myEmitter.emit('start');
//----------------------------
// Q13
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// myEmitter.on('login', (username) => { 
//     console.log(`User ${username} has logged in`);
// });

// myEmitter.emit('login', 'john_doe');
//----------------------------
// Q14
// const fs = require('fs');
// function readFileSyncFile(path) {
//     const dataread = fs.readFileSync(path, 'utf8');
//     console.log(dataread);
// }
// const filePath = "fille.txt"; 
// readFileSyncFile(filePath);
// //----------------------------
