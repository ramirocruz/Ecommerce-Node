const route=require('express').Router();
route.use('/users',require('./users'));
route.use('/listings',require('./listings'));
route.use('/isLoggedin',require('./isLoggedin'));
route.use('/currentuser',require('./currentuser'));
route.use('/cart',require('./cart'));
route.use('/wishlist',require('./wishlist'));
route.use('/logout',require('./logout'));

exports=module.exports = {
  route
};
