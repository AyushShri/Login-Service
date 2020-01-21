var generator = require('generate-password');
 
var password = generator.generate({
    length: 10,
    numbers: true
});
 console.log(password);
const nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'user@gmail.com',
        pass:'password'
    }



});
let mailOptions = {
    from:'shrivastavayush12@gmail.com',
    to: 'pleasechangeme',
    subject:'Test Mail',
    text: ('Hello, You have successfully Signed Up!!. Your password is '+password)

};


var send = function (email) {

    mailOptions.to = email;
    transporter.sendMail(mailOptions,function(err, data) {
        if (err) {
        console.log("Error Occurred",err);
        } else {
        console.log("Email Sent Succesfully");
    
        }
    });
}

module.exports.send = send;

