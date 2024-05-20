// Part 1 - Set up Server

const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware will be required here:
const cors = require('cors');
const logger = require('morgan');
const apartmentsRouter = require('./routes/apartments');
const housesRouter = require('./routes/houses');

// Middleware Pipelane
app.use(cors());
app.use(logger('dev'));

// This is a test to test route (not necessary to keep here once confirmed working)
// app.get('/', function (req, res) {
//   res.json({ msg: 'Server running!' })
// });

//Mount new routes here
// or can be written like this:
app.get('/', (req, res) => {
  res.send("welcome!");
});

app.use('/apartments', apartmentsRouter);
app.use('/houses', housesRouter);




// Request Listener
app.listen(PORT, function () {
  console.log(`Server running on port: ${PORT}`);
});