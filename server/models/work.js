var mongoose = require('mongoose');

var schema = mongoose.Schema({

    createDate      : { type : Date, default : Date.now },
    hoursWorked     : Number,
    description     : String,
    hourPrice       : Number,
    moneyMade       : Number,
    paid            : {type : Boolean, default : false }

});

mongoose.model('Work', schema);