const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const db = mongoose.connect(process.env.mongo_url,{
  useNewUrlParser:true
}).then(()=>{
  console.log('Connected')
}).catch((err)=>{console.log(err)})

module.exports = db
