var mongoose = require('mongoose');

exports.connect = function(success){

    mongoose.connect('mongodb://localhost:27017/impro');

    mongoose.connection.on('error', function(err){

        console.log(err);

    });

    mongoose.connection.once('open', function(){

        if(success){
            success();
        }

        console.log('Database connected');

    });

};