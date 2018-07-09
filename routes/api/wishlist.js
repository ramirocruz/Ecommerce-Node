const route = require('express').Router();
const Wishlist=require('../../db').Wishlist;


route.get('/:id',function (req,res) {
    var id=req.params.id;
    Wishlist.findAll({
      attributes:['productid'],
        where:{
          userId:id
        }}).then((result) => {
           //res.status(443).send(product);
           res.send(result);
         }).catch((err) => {
           res.status(887).send(err.message);
         })
})


route.get('/delete/:id',function (req,res) {
  var id=req.params.id;
  Wishlist.destroy({
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

   Wishlist.create({
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
