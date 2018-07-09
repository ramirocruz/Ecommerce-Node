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

Listing.belongsTo(User, {foreignKey: 'seller'});

db.sync().then(() => {
  console.log("DB synced");
}).catch((err) => {
  console.log(err.message);
})
exports=module.exports={
  User,Listing
}


//
// const Sequelize=require('sequelize');
// const db=new Sequelize('mytestdb','zcruz','zcruz',{
//   host:'localhost',
//   dialect:'mysql',
//   pool:{
//     min:0,
//     max:5
//   }
// });
//
// const User=db.define('users',{
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement:true,
//     allowNull:true,
//
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull:false,
//   },
//   password:{
//     type: Sequelize.STRING,
//     allowNull:false,
//   }
// });
// const Product=db.define('products',{
//   id:{
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement:true,
//     allowNull:true,
//   },
//   name:{
//     type: Sequelize.STRING,
//     allowNull:false,
//   },
//   type: {
//     type:Sequelize.STRING,
//     },
//   price: {
//     type:Sequelize.FLOAT,
//     allowNull:false,
//     defaultValue:0.0,
//   }
// });
//
// db.sync().then(() => {
//   console.log("DB synced");
// }).catch((err) => {
//   console.log(err.message);
// })
// exports=module.exports={
//   User,Product
// }
