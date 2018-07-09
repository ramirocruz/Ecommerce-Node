const route = require('express').Router();

route.get('/',function (req,res) {
  req.session.user=null;
  res.send(true);
})
exports=module.exports=route;
