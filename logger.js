const EventEmitter= require('events');


var url='http://mylogger.io/log';

class Logger extends EventEmitter{
log(message){
    //send an HTTP request
    console.log(message);
    this.emit('messageLogged',{id:1 , value:"what"});
    this.emit('arunHero');

}
}



module.exports =  Logger;
