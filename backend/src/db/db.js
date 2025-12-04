const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((error)=>{
        console.error("MongoDB Connection Error:", error.message);
    });
}

module.exports = connectToDB;
