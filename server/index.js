import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json({limit: '30mb' , extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb' , extended: true}))

mongoose
.connect(
    "mongodb+srv://MatyZala:156200147@Social.rb5hdc0.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
    }
    ).then(()=>app.listen(3001, ()=>console.log('Listening in port 3001')))
