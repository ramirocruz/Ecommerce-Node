const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const session=require('express-session');



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
app.use('/',express.static(__dirname+"/public"));

app.use('/api',require('./routes/api').route);


// app.post('/file',function (req,res) {
//   console.log(req.body);
//   res.send(req.body);
// })




app.listen(2000,function () {
  console.log("Server Started");
})
module.exports= {app,session};
