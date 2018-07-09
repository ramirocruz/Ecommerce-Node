const route = require('express').Router();

route.get('/',function (req,res) {
res.send(
   !!req.session.user,
)

})
exports=module.exports=route
