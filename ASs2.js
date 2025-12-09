//Q1
// const path = require('path');
// function setfillepath(){
//     const currfille = __filename;
//     const currdir = __dirname;
//     console.log(currfille);
//     console.log(currdir);
// }
// setfillepath();
//---------------------------------------------------
//Q2
// const path = require('path');
// function getfilename(fillepath){
//     const dirfille = path.basename(fillepath);
//     return dirfille;
// };
// const fillepath1="C:\Users\LOQ\Desktop\Work space java\My_java"
// const fill = getfilename(fillepath1);
// console.log(fill);
//---------------------------------------------------
//Q3
// const path = require('path');
// function connectpath(pathobj){
// const { dirpa, namefille, extfill } = pathobj;
//     return path.join(`${dirpa}${namefille}${extfill}`);

// }
// const path1 = {
//     dirpa:("/foleder"),
//     namefille:("/main"),
//     extfill:(".js")
// };
// const fullpath1 = connectpath(path1);
// console.log(fullpath1);
//---------------------------------------------------
//Q4
// const path = require('path');
// function getFileName(filePath) {
//     const extenstion = path.extname(filePath);
//     return extenstion
// }
// const filePath = '/home/user/documents/report.pdf';
// const fiel=getFileName(filePath);
// console.log(fiel); 
// -----------------------------------------------
//Q5
// const path = require('path');
// const { exit } = require('process');
// function getDirectoryName(filePath) {
//     const pathname = path.parse(filePath);
//     return {
//         name: pathname.name,
//         exit : pathname.ext
//     }
// }
// const filePath = '/home/user/documents/report.pdf';
// const fiel = getDirectoryName(filePath);
// console.log(fiel);
// -----------------------------------------------
//Q6
// const path = require('path');
// const pathtrue = "/home/user/documents/report.pdf";
// const pathfalse = "home/user/documents/report.pdf";
// function isAbsolutePath(filePath) {
//     return path.isAbsolute(filePath);
// }
// const fieltrue = isAbsolutePath(pathtrue);
// const fielfalse = isAbsolutePath(pathfalse);
// console.log(fieltrue);
// console.log(fielfalse);
// -----------------------------------------------
//Q7
// const path = require('path');
// const path1={
//     dir:"home",
//     name:"report",
//     ext:".pdf"
// }
// console.log(path.format(path1));
// -----------------------------------
// Q8
// const path = require('path');
// function getDirectoryName(filePath) {
// const location = path.resolve(__dirname, path2);
// return location;
// }
// const path2 = "folder";
// console.log(getDirectoryName(path2));
//------------------------------------------
//Q9
// const path = require('path');
// function getDirectoryName(filePath,filePath2) {
//     const fullpath = path.join(filePath, filePath2);
//     return fullpath;
// }
// const path2 = "folder";
// const path3 = "/foleder2/file.txt";
// console.log(getDirectoryName(path2, path3));
//------------------------------------------
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

