const Sequelize = require('sequelize');

var db;
// if (!global.hasOwnProperty('db')) {
//   var Sequelize = require('sequelize')
//     , sequelize = null

if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    db = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        // port:     '5432',
        // host:     'ec2-54-83-59-239.compute-1.amazonaws.com',
        logging: true //false
    })
} else {
    // the application is executed on the local machine ... use mysql
    db = new Sequelize('testdb', 'zcruz', 'zcruz', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            min: 0,
            max: 5
        }
    });
}

// global.db = {
//   Sequelize: Sequelize,
//   sequelize: sequelize,
//   User:      sequelize.import(__dirname + '/user')
// add your other models here
// }



const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,

    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },    
    address: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    blockchain:{
        type: Sequelize.JSON,
        allowNull:false
    }    
});
const Pendingtransaction = db.define('pendingtransactions',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    transaction:{
        type: Sequelize.JSON,
        allowNull:false
    } 
    
});
const Listing = db.define('listings', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
    },
    image:{
      type:Sequelize.STRING,
    },
    seller: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    },
    condition: {
        type: Sequelize.ENUM,
        values: ['New', 'Almost New', 'Slight Damage', 'Worn']
    },
    // blockchain:{
    //     type: Sequelize.JSON,
    //     allowNull:false,
    // }
});

Listing.belongsTo(User);
const Cart = db.define('cart', {
    productid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // unique:true
    }
});
// ,{indexes: [
//     // Create a unique index on productid
//     {
//       unique: true,
//       fields: ['productid']
//     }]});
const Wishlist = db.define('wishlist', {
    productid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // unique:true
    }
});
// ,{indexes: [
//     // Create a unique index on productid
//     {
//       unique: true,
//       fields: ['productid']
//     }]});

const Message = db.define('message', {
    sender: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    product: {
        type: Sequelize.STRING,
        allowNull: false
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
exports = module.exports = {
    User,
    Listing,
    Cart,
    Wishlist,
    Message,
    Sequelize,
    Pendingtransaction
}