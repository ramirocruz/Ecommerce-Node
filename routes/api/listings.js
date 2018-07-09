const route = require('express').Router();
const Listing=require('../../db').Listing;
route.get('/',function (req,res) {
  Listing.findAll()
         .then((listing) => {
           //res.status(443).send(product);
           res.send(listing);
         }).catch((err) => {
           res.status(887).send(err.message);
         })
})

 route.post('/',function (req,res) {

   Listing.create({
     name:req.body.name,
     author:req.body.author,
     price:req.body.price,
     condition:req.body.condition
   }).then((listing) => {
     //res.status(442).send(products);
     res.send(listing);
   }).catch((err) => {
     res.status(886).send(err.message);
   })
 })
exports = module.exports =route


// const route = require('express').Router();
// const Product=require('../../db').Product;
// route.get('/',function (req,res) {
//   Product.findAll()
//          .then((product) => {
//            //res.status(443).send(product);
//            res.send(product);
//          }).catch((err) => {
//            res.status(887).send(err.message);
//          })
// })
//
//  route.post('/',function (req,res) {
//    if(parseFloat(req.body.price).isNaN==true){
//
//      return ;
//    }
//    Product.create({
//      name:req.body.name,
//      type:req.body.type,
//      price:parseFloat(req.body.price),
//    }).then((products) => {
//      //res.status(442).send(products);
//      res.send(products);
//    }).catch((err) => {
//      res.status(886).send(err.message);
//    })
//  })
// exports = module.exports =route
