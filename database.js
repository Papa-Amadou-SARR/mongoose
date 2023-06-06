const express = require("express");
const app = express();

const mongoose = require('mongoose')

//Database
const database = (module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }


    try {
        mongoose.connect(
    'mongodb+srv://pipita:htdQlV8fnwI1VZZR@cluster0.ffeimny.mongodb.net/mongoose?retryWrites=true&w=majority',
        connectionParams
        );
        console.log("Database connected succesfully");
    } catch (error) {
        console.log("Database connection failed");
    }
});

database(); 

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

