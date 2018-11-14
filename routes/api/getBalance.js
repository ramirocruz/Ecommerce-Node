const User = require('../../db').User;
const route = require('express').Router();
const Blockchain = require('../../blockchain/bc').Blockchain;
const SHA256 = require('crypto-js').SHA256;
var zcoin = new Blockchain();
route.get('/',function(req,res){
   User.find({where:{id:1}}).then(result => {blockchain =result;
    //  blockchain = JSON.parse(blockchain)
     zcoin.chain = blockchain.blockchain.chain;
    balance = zcoin.getBalanceOfAddress(SHA256(req.session["user"][0].id.toString()).toString())
    // balance = zcoin.getBalanceOfAddress(SHA256(1));
    res.send({balance,zcoin});}
);
  
})

module.exports= route;