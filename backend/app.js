const express = require('express');
const cors = require('cors');
const app = express();


// const postsRoute = require('./routes/posts');
const userRoute = require('./routes/customer');
const imageRoute = require('./routes/images');
const orderRoute = require('./routes/order');
const invoiceRoute = require('./routes/invoice');


app.use(express.json());
app.use(cors());
app.use("/uploads",express.static('uploads'))
   

// app.use("/posts",postsRoute);
app.use("/images",imageRoute);
app.use("/customer", userRoute);
app.use("/order", orderRoute);
app.use("/invoice", invoiceRoute);


module.exports =app;

