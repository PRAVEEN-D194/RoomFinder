const mongoose = require("mongoose");

const connectionDatabase = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then((con) => {
            console.log(`Database connected successfully on host: ${con.connection.host}`);
        })
        .catch((err) => {
            console.error(`Database connection failed: ${err.message}`);
            console.error("Make sure: 1) MongoDB Atlas cluster is running 2) Your IP is whitelisted 3) Credentials are correct");
        })
};

module.exports = connectionDatabase;