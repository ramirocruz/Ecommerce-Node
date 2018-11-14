const route=require('express').Router();
route.use('/users',require('./users'));
route.use('/listings',require('./listings'));
route.use('/isLoggedin',require('./isLoggedin'));
route.use('/currentuser',require('./currentuser'));
route.use('/cart',require('./cart'));
route.use('/wishlist',require('./wishlist'));
route.use('/logout',require('./logout'));
route.use('/message',require('./message'));
route.use('/transaction',require('./Transaction'));
route.use('/getBalance',require('./getBalance'));
route.use('/mineBlock',require('./mineBlock'));
exports=module.exports = {
  route
};
