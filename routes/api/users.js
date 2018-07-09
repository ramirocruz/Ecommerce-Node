const route = require('express').Router();
const User = require('../../db').User;
// const app=require('../../server').app;
// const session=require('../../server').session;

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

  }).then((user) => {
    //res.status(445).send(user);
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

exports=module.exports=route
