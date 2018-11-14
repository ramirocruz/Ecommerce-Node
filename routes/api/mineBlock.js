const Transaction = require('../../blockchain/bc').Transaction;
const Block = require('../../blockchain/bc').Block;
const User = require('../../db').User;
const SHA256 = require('crypto-js').SHA256;
const Pendingtransaction=require('../../db').Pendingtransaction;
const route = require('express').Router();
const Op=require('sequelize').Op;
var Blockchain = require('../../blockchain/bc').Blockchain;
var newBlock,blockchain2,lastid;
b1 = new Blockchain();
b2 =new Blockchain();
var pt;
route.get('/',function(req,res){
User.find({
    where: {id:1}
}).then( user =>{
    b1.chain = user.blockchain.chain;
    Pendingtransaction.findAll().then(transactions => {    
        lastid = transactions[transactions.length-1].id;
        pt = [];
        for( t of transactions)
        pt.push(t.transaction);
         console.log(lastid);
        if(pt.length == 0)
        res.send(false);
        console.log(req.session.user[0].id);
        console.log(+req.session["user"][0].id);
        pt.push(new Transaction(SHA256(0).toString(),SHA256(req.session["user"][0].id.toString()).toString(),b1.miningreward));
        console.log(JSON.stringify(pt,null));
        newBlock = new Block(Date.now,pt,b1.getlatestBlock().currentHash,req.session["user"][0].name);
        newBlock.mineNewBlock(b1.difficulty); 

        User.find({
            where: {id:1}
        }).then( user =>{
            b2.chain = user.blockchain.chain;
            if(JSON.stringify(b1,null)==JSON.stringify(b2,null)){   
                b2.chain.push(newBlock);
                User.update(
                    {blockchain : b2},
                    {where:{id:{ [Op.gt]: 0}}}
                    ).then(ans =>{
                        
                        Pendingtransaction.destroy({
                            where:{id:{
                                [Op.lte] : lastid
                            }}
                        }).then( stat => {
                            res.send(true); 
                        })
                       
                    }
                    
                    )
                
        }});
        
        })
          
    });
 
});
    




module.exports= route;