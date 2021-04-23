const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//express app
const app = express();

//connect to mongoDB
dbURI = "mongodb+srv://admin:admin@nodetut.4yiwl.mongodb.net/todo?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => err)
