const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const nodemailer = require("nodemailer");

// create express app
const app = express();
app.use(cors())
app.use((req, res, next) => {
    console.log(req.originalUrl + " was called")
    next()
})
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

const RoutingGroup = require('./app/routes/group.js')
RoutingGroup(app);
const RoutingBaby = require('./app/routes/baby.js')
RoutingBaby(app);
const RoutingParent = require('./app/routes/parent.js')
RoutingParent(app);
const RoutingAssistant = require('./app/routes/assistant.js')
RoutingAssistant(app);
const RoutingClub = require('./app/routes/clubsRoute.js')
RoutingClub(app);
const RoutingEvent = require('./app/routes/eventsRoute.js')
RoutingEvent(app);

const RoutingMeal = require('./app/routes/mealsRoute.js')
RoutingMeal(app);
// define a simple route
// app.get('/create/group', (req, res) => {
//   const newGroup = new group({name:'firstgroup'})
//   newGroup.save().then(doc=>{
//       console.log(doc);   
//       res.end(doc.toString())
//     }

//   )
// });

app.post("/sendmail", (req, res) => {
	// consosendmaille.log("alooooo");
	console.log(req, "req");
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "jobranamairi4119@gmail.com",
			pass: "Jobran4119."
        },
        debug: true, // show debug output
        logger: true // log information in console
	});

	var mailOptions = {
		from: "jobranamairi4119@gmail.com",
		to: req.body.email,
		subject: req.body.subject,
		text: req.body.text
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
            console.log(error);
            res.send("error send it")
		} else {
            console.log("Email sent: " + info.response);
            res.send("send it")
		}
	});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});