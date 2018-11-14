const route = require('express').Router();
const User = require('../../db').User;
const Blockchain = require('../../blockchain/bc').Blockchain;
const SHA256 = require('crypto-js').SHA256;
const Transaction = require('../../blockchain/bc').Transaction;
// const app=require('../../server').app;
// const session=require('../../server').session;
zcoin = require('../../blockchain/bc').zcoin;
pendingtransactions = require('../../db').Pendingtransaction;
zcoinz= JSON.stringify(zcoin,null);
route.post('/',function (req,res) {
  if(req.body.status==0){
    //Login
    // console.log(req.body.item.email,req.body.item.password);
    User.findAll({
      where:{
        email:req.body.item.email,
        password:req.body.item.password,
      }
    }).then((result) => {
        if(result.length==0){
          // wrong credentials
          res.send([false,result])
        }else{

          req.session["user"]=result;
          req.session.save();
      // console.log([true,result]);
      res.send([true,result]);
    }
    }).catch((err) => {
      res.send({error:err.message});
    })


  }else if(req.body.status==1){
    // register
    // console.log("in register.....",req.body);
  
  User.create({
    name:req.body.item.name,
    email:req.body.item.email,
    college:req.body.item.college,
    address:req.body.item.address,
    phone:req.body.item.contact,
    password:req.body.item.user_password,
    blockchain:zcoin

  }).then((user) => {    
    transact(user.id);
    
    res.send(user);
  }).catch((err) => {
    res.status(889).send({
      error: err.message
    })
  })
}
else {
// checking if user already exits
User.findAll({
  where:{
    email:req.body.item.email
  }
}).then((result) => {
  if(result.length==0)
  {//user doesn't exits
  res.send([false]);    
}else {
  res.send([true]);
}
})

}
})

function transact(id){
  var from = SHA256(0).toString();
  var amt = 888888888888;
  if(id != 1)
  amt = 500;
  var to = SHA256(id.toString()).toString();
  
  tran = new Transaction(from,to,amt);
pendingtransactions.create({
    transaction:tran
}).then((tra) => {
  
return !!tra;
}  
)
}
exports=module.exports=route
