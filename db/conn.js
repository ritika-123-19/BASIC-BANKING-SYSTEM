const cons = require("consolidate");
const mongoose= require("mongoose");
const url = 'mongodb+srv://ritika192000:Xe8mr20U4JoFaJ21@basic-banking-system.bxb0n.mongodb.net/RjBank'||'mongodb://localhost:27017/RjBank';
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
