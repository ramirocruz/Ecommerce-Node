const route=require('express').Router();
route.use('/users',require('./users'));
route.use('/listings',require('./listings'));
route.use('/isLoggedin',require('./isLoggedin'));
route.use('/currentuser',require('./currentuser'));
// route.use('/currentuser',require('./currentuser'));
exports=module.exports = {
  route
};
