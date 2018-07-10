const route = require('express').Router();
const Cart=require('../../db').Cart;
route.get('/:id',function (req,res) {
  var id=req.params.id;
  Cart.findAll({
    attributes:['productid'],
      where:{
        userId:id
      }}) .then((result) => {
           //res.status(443).send(product);
           res.send(result);
         }).catch((err) => {
           res.status(887).send(err.message);
         })
})


route.get('/delete/:id',function (req,res) {
  var id=req.params.id;
  Cart.destroy({
    where:{
      userId:id
    }
  }).then((result) => {
    
    res.send(true);
  }).catch((err) => {
    res.status(889).send(err.message);
  })


})

 route.post('/',function (req,res) {
   let userid=req.body.userid;
   let productid=req.body.productid;
   Cart.findAll({
     where:{
      productid:productid,
       userId:userid
     }
   }).then((value) => {
     if(value.length==0){
   Cart.create({
     productid:productid,
     userId:userid

   }).then((result) => {

     res.send(result);
   }).catch((err) => {
     res.status(886).send(err.message);
   })
 }
 else {
   res.send(false);
 }
}).catch((err) => {
  res.status(887).send(err.message);
})
})
exports = module.exports =route
