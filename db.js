const Sequelize=require('sequelize');
const db=new Sequelize('testdb','zcruz','zcruz',{
  host:'localhost',
  dialect:'mysql',
  pool:{
    min:0,
    max:5
  }
});

const User=db.define('users',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull:true,

  },
  name: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  email:{
    type: Sequelize.STRING,
    allowNull:false,
  },
  college:{
    type: Sequelize.STRING,
    allowNull:false,
  },
  address:{
    type: Sequelize.STRING,
  },
  phone:{
    type:Sequelize.STRING,
  },
  password:{
    type: Sequelize.STRING,
    allowNull:false,
  }
});
const Listing=db.define('listings',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull:true,
  },

    name:{
    type: Sequelize.STRING,
    allowNull:false,
  },
  author: {
    type:Sequelize.STRING,
    },
  // image:{
  //   type:Sequelize.BLOB,
  // },
  seller:{
    type:Sequelize.STRING,
  },
  price: {
    type:Sequelize.FLOAT,
    allowNull:false,
    defaultValue:0.0,
  },
  condition:{
    type:Sequelize.ENUM,
    values:['New','Almost New','Slight Damage','Worn']
  }
});

Listing.belongsTo(User);
const Cart= db.define('cart',{
  productid:{
    type:Sequelize.INTEGER,
    allowNull:false,
    // unique:true
    }
});
// ,{indexes: [
//     // Create a unique index on productid
//     {
//       unique: true,
//       fields: ['productid']
//     }]});
const Wishlist=db.define('wishlist',{
  productid:{
    type:Sequelize.INTEGER,
    allowNull:false,
    // unique:true
  }
});
// ,{indexes: [
//     // Create a unique index on productid
//     {
//       unique: true,
//       fields: ['productid']
//     }]});

const Message=db.define('message',{
  sender:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  product:{
    type:Sequelize.STRING,
    allowNull:false
  }
});

Cart.belongsTo(User);
Wishlist.belongsTo(User);
Message.belongsTo(User);

db.sync().then(() => {
  console.log("DB synced");
}).catch((err) => {
  console.log(err.message);
})
exports=module.exports={
  User,Listing,Cart,Wishlist,Message,Sequelize
}
