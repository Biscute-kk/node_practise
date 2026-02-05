// const path = require('path');

// var pathObj= path.parse(__filename);

// console.log(pathObj);


// const os= require('os');
// var totelMemory= os.totalmem();
// var freemem= os.freemem();
// console.log(totelMemory);
// console.log(freemem);


// const fs = require('node:fs');

// const files= fs.readdirSync('./');
// console.log(files);

// fs.readdir('./',function(err,files){
//     if (err) console.log('Error', err);
//     else console.log('Result ', files)
// });
// // console.log(filess);


const EventEmitter= require('events');
const Logger= require('./logger');
const logger= new Logger();
//register a listner


logger.on('messageLogged',(arg) =>{
    console.log('Listner called',arg);
});
logger.on('arunHero',function(){
    console.log("yes ");
})



logger.log('8');


