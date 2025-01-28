// custome code that works on event driven architecture

const EventEmitter = require("events");
const events = new EventEmitter();

function handelUserSignup(user){
    console.log(`Welcome email sent to : ${user.email}`);
    console.log(`Welcome ${user.name} Thankyou for signing Up with us`)
}

function handelOrderPlaced(order){
    console.log(`Order placed for order Id : ${order.orderId}`);
}

function handelError(err){
    console.error(`Error Occured ${err.errorCode}`);
    console.error(`Error message ${err.errorMessage}`);
}

//Register EventLisners
events.on('UserSignup',handelUserSignup);
events.on('OrderPlaced',handelOrderPlaced);
events.on('error',handelError);

//Emmiter function
function emitUserSignup (name,email){
    events.emit('UserSignup',{name,email})
}

function emitOrderPlaced (orderId){
    events.emit('OrderPlaced',{orderId})
}

function emitError (errorCode, errorMessage){
    events.emit('error',{errorCode,errorMessage})
}

// event Emmiter

emitUserSignup("Rahul" , "rahul@xyz.com");
emitOrderPlaced("12345");
emitError("AMZ-1001","Unable To place Order");