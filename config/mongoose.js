const mongoose  = require('mongoose');


const url = process.env.DB_URL;
mongoose.set('strictQuery',true);
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('mongodb Connection Successfully')
}).catch((err)=>{
    console.log('Error in connecting to mongodb ',err);
});