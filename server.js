const fallback = require('express-history-api-fallback');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const session = require('express-session');
// const session = require('mongoose');
// let dev_db_url = 'mongodb://zcruz:zcruz123@ds119343.mlab.com:19343/apitest';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB,{useNewUrlParser:true});
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use(function (req, res, next) {
//
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     // Pass to next layer of middleware
//     next();
// });
app.use(session({
    secret: 'lasdrewuru242830hjflkjdsf023480982034kda455jkgja',
    saveUninitialized: false,
    resave: false
}))
var root = __dirname + '/public';
app.use(express.static(root));
app.use('/api/uploads',express.static(__dirname+'/uploads'));
// app.use('/',express.static(__dirname+"/public"));
// app.use(fallback(__dirname + '/public/index.html'));
app.use('/api', require('./routes/api').route);



// app.post('/file',function (req,res) {
//   console.log(req.body);
//   res.send(req.body);
// })


app.set('port', (process.env.PORT || 2000));

app.listen(app.get('port'), function() {
    console.log("Server Started on port:", app.get('port'));
})
app.use(fallback('index.html', { root: root }));
module.exports = { app, session };