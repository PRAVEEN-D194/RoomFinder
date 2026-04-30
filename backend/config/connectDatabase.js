const mongoose = require("mongoose");

const connectionDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log(`Database connected successfully on host: ${con.connection.host}`);
    })
};

module.exports = connectionDatabase;