const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const room = require('./controllers/room');
const roomRouter = require('./routers/roomrouter');
const reviewRouter = require('./routers/reviewrouter');

const connectionDatabase = require('./config/connectDatabase');

dotenv.config({ path: path.join(__dirname, "./config/config.env") });
connectionDatabase();
app.use(express.json());

app.use('/api/v1', roomRouter);
app.use('/api/v1', reviewRouter);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});