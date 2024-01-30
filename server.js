const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./FeedbackRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I AM LISTENING ON PORT ${PORT}`)
})