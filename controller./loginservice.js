var send = require('./emailservice');

var login = function(req, res ) {
    // do stuff 
    console.log('req is '+ req.body.id);
    //send  email
    send.send(req.body.id);
    console.log('sending response')
    res.send({'status' : true});
    
}


module.exports.x  = login;