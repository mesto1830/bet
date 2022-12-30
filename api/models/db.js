const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const db = mongoose.connect(process.env.mongo_url,{
  useNewUrlParser:true
}).then(()=>{
  console.log('Connected')
}).catch((err)=>{console.log(err)})

// mongoose.connection.on('connected', function(){
//   console.log(connected("Mongoose default connection is open to ", process.env.DATA));
// });

// mongoose.connection.on('error', function(err){
//   console.log(error("Mongoose default connection has occured "+err+" error"));
// });

// mongoose.connection.on('disconnected', function(){
//   console.log(disconnected("Mongoose default connection is disconnected"));
// });

// process.on('SIGINT', function(){
//   mongoose.connection.close(function(){
//       console.log(termination("Mongoose default connection is disconnected due to application termination"));
//       process.exit(0)
//   });
// });
module.exports = db
