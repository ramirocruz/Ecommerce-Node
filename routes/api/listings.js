const route = require('express').Router();
const Listing=require('../../db').Listing;
const Sequelize=require('../../db').Sequelize;
const Op=Sequelize.Op;
route.get('/',function (req,res) {
  Listing.findAll()
         .then((listing) => {
           //res.status(443).send(product);
           res.send(listing);
         }).catch((err) => {
           res.status(887).send(err.message);
         })
})


route.get('/:id',function (req,res) {
  var id=req.params.id;
  Listing.findAll({
    where:{
      id:id
    }
  }).then((listing) => {
    res.send(listing);
  }).catch((err) => {
    res.status(889).send(err.message);
  })


})
route.post('/var',function (req,res) {

  Listing.findAll({
  where: {
    id: {
      [Op.or]: req.body || [0]
    }
  }
}).then((listing) => {

    res.send(listing);
  }).catch((err) => {
    res.status(889).send(err.message);
  })


})

 route.post('/',function (req,res) {

   Listing.create({
     name:req.body.name,
     author:req.body.author,
     seller:req.body.seller,
     price:req.body.price,
     condition:req.body.condition,
     userId:req.body.userid

   }).then((listing) => {
     //res.status(442).send(products);
     res.send(listing);
   }).catch((err) => {
     res.status(886).send(err.message);
   })
 })
exports = module.exports =route
