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
    console.log(result);
    res.send(true);
  }).catch((err) => {
    res.status(889).send(err.message);
  })


})

 route.post('/',function (req,res) {

   Cart.create({
     productid:req.body.productid,
     userId:req.body.userid

   }).then((result) => {
     //res.status(442).send(products);
     res.send(result);
   }).catch((err) => {
     res.status(886).send(err.message);
   })
 })
exports = module.exports =route
