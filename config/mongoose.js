const mongoose  = require('mongoose');


const url = 'mongodb+srv://safaidansari:9528901800@safaidansari.6h03zyd.mongodb.net/UserAuthentication'
mongoose.set('strictQuery',true);
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('mongodb Connection Successfully')
}).catch((err)=>{
    console.log('Error in connecting to mongodb ',err);
});