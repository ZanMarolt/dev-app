var mongoose = require('mongoose');
/* JSON Example

 {
 "price"          : 13.20,
 "description"    : "Solnina"
 }

 */
var schema = mongoose.Schema({

    billDate      : { type : Date, default : Date.now },
    price           : Number,
    description     : String

});

var Bill = mongoose.model('Bill', schema);