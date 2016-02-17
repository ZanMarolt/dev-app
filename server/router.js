var express = require('express');
var mongoose = require('mongoose');

module.exports = function(server){
    // Adding instance to the database

    // BILLS

    server.post('/api/bill', function(req, res){
        console.log('Server just recieved a POST request!!');
        var data = req.body;
        sendBill(data, function(){
            res.sendStatus(200);
        });

    });
    server.get('/api/bill', function(req, res){
        console.log('Server just recieved a GET request!!');

        var Bill = mongoose.model('Bill');

        Bill.find(function (err, docs) {

            if (!err) {
                res.send(docs);
            } else {
                console.log(err);
            }

        });

    });
    server.delete('/api/bill/:id', function(req, res){
        console.log('Server just recieved a DELETE request!!');

        var id = req.params.id;
        var Bill = mongoose.model('Bill');

        Bill.findByIdAndRemove(id, function (err, doc) {

            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }

        });

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

    //INCOME

    server.post('/api/income', function(req, res){
        console.log('Server just recieved a POST request!!');
        var data = req.body;
        sendIncome(data, function(){
            res.sendStatus(200);
        });

    });
    server.get('/api/income', function(req, res){
        console.log('Server just recieved a GET request!!');

        var Income = mongoose.model('Income');

        Income.find(function (err, docs) {

            if (!err) {
                res.send(docs);
            } else {
                console.log(err);
            }

        });

    });
    server.delete('/api/income/:id', function(req, res){
        console.log('Server just recieved a DELETE request!!');

        var id = req.params.id;
        var Income = mongoose.model('Income');

        Income.findByIdAndRemove(id, function (err, doc) {

            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }

        });

    });

    function sendIncome(data, cb){
        var Income = mongoose.model('Income');
        var income = new Income(
            {
                incomeDate     : data.date,
                price          : data.price,
                description    : data.description
            }
        );
        income.save();

        if(cb){
            cb();
        }
    }

};