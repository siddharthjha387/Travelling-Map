require('dotenv').config()

const express=require('express');
const mongoose=require('mongoose');
const pinRoute=require('./routes/pins')
const userRoute=require('./routes/users')

const app=express();

app.use(express.json());

const url = process.env.MONGO_URL;

mongoose.connect(url).then(()=>{
    console.log("Database connected");
}).catch((err)=>{console.log(err);});


app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);

app.listen(process.env.PORT||8800,()=>{
    console.log("So gya yeh jahan");
})