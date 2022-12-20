require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const db = process.env.DB;
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect(db).then(() => {
    app.listen(port, () => {
        console.log(`App is listening on Port: ${port}`);
    })
}).catch((error) => {
    console.log(error.message);
});

app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true}));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/listings', require('./routes/listingRoutes'));