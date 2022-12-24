const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const db = mongoose.connect('mongodb://localhost:27017/gasvet',{
  useNewUrlParser:true
}).then(()=>{
  console.log('Connected')
}).catch((err)=>{console.log(err)})

module.exports = db
