const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser')
const app        = express();
const mongoose   = require('mongoose');
const port       = 3000
const db         = mongoose.connection;

const indexRouter = require('./routes/index');

// mongoDB
db.on('error', console.error)
db.once('open', function(){
  console.log("Connected to mongod server");
});
mongoose.connect('mongodb://localhost/mongodb_tutorial');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.listen(port)