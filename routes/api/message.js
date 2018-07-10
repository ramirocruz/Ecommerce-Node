const route = require('express').Router();
const Message = require('../../db').Message;

route.get('/',function (req,res) {
  let userid=req.session.user[0].id;
  Message.findAll({
    where:{userId:userid}
  }).then((value) => {
    res.send(value);
  }).catch((err) => {
    res.status(888).send(err.message);
  })

})

route.post('/',function (req,res) {

  
  let sender=req.session.user[0].name;
  let userid=req.body.userid;
  let product=req.body.product;
  Message.findAll({
    where:{
      sender:sender,
      product:product,
      userId:userid
    }
  }).then((value) => {
        if(value.length==0){
          Message.create({
            sender:sender,
            product:product,
            userId:userid
          }).then((value) => {
            if(value)
            res.send(true)
            else {
              res.send(false)
            }
          }).catch((err) => {
            res.status(555).send(err.message);
          })

        }else{
          res.send(false);
        }

  }).catch((err) => {
    res.status(666).send(err.message);
  })


})


route.get('/delete',function (req,res) {
  Message.destroy({
    where:{userId:req.session.user[0].id}
  }).then((value) => {
    if(value)
    res.send(true)
    else {
      res.send(false)
    }
  }).catch((err) => {
    res.status(656).send(err.message);
  })
})

exports=module.exports=route;
