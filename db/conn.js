const cons = require("consolidate");
const mongoose= require("mongoose");
const url = 'mongodb://localhost:27017/RjBank';
const conn = mongoose.connection;
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection Sucessful`);
}).catch((e) =>{
    console.log(`No Connection`);
})
module.exports = conn;