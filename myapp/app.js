const express    = require('express');
const app        = express();
const path       = require('path');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require('./routes/index')

app.use('/', indexRouter)
app.listen(3000)

module.exports = app