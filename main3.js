// importing the modules of Nodejs  in the program
// importing the events module
var events = require('events')

// importing the eventsEmmiters module
var eventEmmiter = new events.EventEmitter()

// create an event handler as follows

var connectHandler = function connected(){

    console.log("Connection Succesfull")
    // fire the data_received event
    eventEmmiter.emit('data_received')
}

// bind the connection event with the handler
eventEmmiter.on('data_received', connectHandler)

// bind the data_received event with the  anoynmous function

eventEmmiter.on('data_received', function(){
    console.log("data received successfully")
})

// fire the connection event

console.log("Program Ended")
