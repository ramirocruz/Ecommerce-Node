const pendingtransactions = require("../../db").Pendingtransaction;
const route = require('express').Router();
const SHA256 = require('crypto-js').SHA256;
const Transaction = require('../../blockchain/bc').Transaction;

route.post('/',function(req,res){
    console.log(req.body.from + " : "+req.body.to + " : "+req.body.amount);
tran = new Transaction(SHA256(req.body.from.toString()).toString(),SHA256(req.body.to.toString()).toString(),req.body.amount);
pendingtransactions.create({
    transaction: tran
}).then((transaction) => {
res.send(!!transaction);
}  
)})
route.get('/',function(req,res){
    pendingtransactions.findAll().then(transactions => res.send(transactions));
})

module.exports = route;