const express    = require('express');
const app        = express();
const path       = require('path');
const bodyParser = require('body-parser')
const mongoose   = require('mongoose');
const port       = 3000
const db         = mongoose.connection;
const dotenv     = require("dotenv");

dotenv.config();

// mongoDB
db.on('error', console.error)
db.once('open', function(){
  console.log("Connected to mongod server")
});
const BluebirdPromise = require('bluebird').Promise
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, promiseLibrary: require('bluebird'),useUnifiedTopology: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(port)