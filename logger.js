console.log(__filename);
console.log(__dirname);
var url='http://mylogger.io/log';

function logg(message){
    //send an HTTP request
    console.log(message);
}

module.exports =logg;
