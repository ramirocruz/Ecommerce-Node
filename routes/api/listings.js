const route = require('express').Router();
const Listing=require('../../db').Listing;
const Sequelize=require('../../db').Sequelize;
const multer = require('multer');  
const storage= multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads/');
  },
  filename: function(req,file,cb){
    cb(null,new Date().toISOString().replace(/[.:-]/g,'')+file.originalname);
  }
})
const fileFilter = function(req,file,cb){
 if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
 cb(null,true);
 else
 cb(null,false);
  
}
const upload =multer({
  storage:storage,
  limits:{fileSize: 1024*1024*5},
  fileFilter:fileFilter
});
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

 route.post('/',upload.single('image'),function (req,res) {
   
// console.log(req.file);   
   Listing.create({
     name:req.body.name,
     author:req.body.author,
     image:req.file.path,
     seller:req.body.seller,
     price:+req.body.price,
     condition:req.body.condition,
     userId:req.body.userId

   }).then((listing) => {
     //res.status(442).send(products);
     res.send(listing);
   }).catch((err) => {
     res.status(886).send(err.message);
   })
 })
exports = module.exports =route
