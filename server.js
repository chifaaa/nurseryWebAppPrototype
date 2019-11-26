const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json({ type: '*/*' }));

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const RoutingFn = require('./app/routes/group.js/index.js')
RoutingFn(app);
const group = require('./app/models/group.js/index.js')

// define a simple route
// app.get('/create/group', (req, res) => {
//   const newGroup = new group({name:'firstgroup'})
//   newGroup.save().then(doc=>{
//       console.log(doc);   
//       res.end(doc.toString())
//     }

//   )
// });

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});