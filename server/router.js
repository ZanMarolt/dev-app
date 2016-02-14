var express = require('express');
var mongoose = require('mongoose');

module.exports = function(server){
    // Adding instance to the database

    /*
     var Bill = mongoose.model('Bill');
     var bill = new Bill(
     {
        price          : 56.5,
        description    : "Racun za telefon"
     }
     );
     bill.save();
     console.log("Added bill to the database! :)");
    */

    server.post('/api/bill', function(req, res){
        console.log('Server just recieved a POST request!!');
        var data = req.body;
        sendBill(data, function(){
            res.sendStatus(200);
        });

    });
    server.delete('/api/bill/:id', function(req, res){
        console.log('Server just recieved a DELETE request!!');

    });

    function sendBill(data, cb){
        var Bill = mongoose.model('Bill');
        var bill = new Bill(
            {
                billDate       : data.date,
                price          : data.price,
                description    : data.description
            }
        );
        bill.save();

        if(cb){
            cb();
        }
    }

};