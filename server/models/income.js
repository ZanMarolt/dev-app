var mongoose = require('mongoose');

var schema = mongoose.Schema({

    createDate      : { type : Date, default : Date.now },
    price           : Number,
    description     : String

});

mongoose.model('Income', schema);