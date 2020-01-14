const Event = require('../models/eventsModel.js');
const babyCtr = require('./baby.js');



// Create and Save a new event
exports.create = (req, res) => {
    // Validate request
    if (!(req.body.startTime && req.body.duration && req.body.type && req.body.description)) {
        return res.status(400).send({
            message: "event's startTime and duration and type and description and babyId can not be empty"
        });
    }

    //many things to wait   ==> await



        const event = new Event({
            startTime: req.body.startTime,
            duration: req.body.duration,
            type: req.body.type,
            description: req.body.description,
            baby: req.body.babyId
        });

        // Save event in the database
        event.save()
            .then(eventDoc => {
                babyCtr.addEventToBaby(req.body.babyId, eventDoc._id)
                    .then((babyDoc) => res.send(babyDoc))
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while updating baby."
                        });
                    });
 

            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while saving the event."
                });
            });


};


// Retrieve and return all the events from the database.
exports.findAll = (req, res) => {
    Event.find()
    .populate('baby')
    .then(events => {
        res.send(events);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the events."
        });
    });
};
// Find a single event with eventId
exports.findOne = (req, res) => {
    Event.findById(req.params.eventId)
    .populate('baby')

        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            res.send(event);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            return res.status(500).send({
                message: "Error retrieving event with id " + req.params.eventId
            });
        });
};

// Update an event identified by the eventId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!(req.body.startTime && req.body.duration && req.body.type && req.body.description)) {
        return res.status(400).send({
            message: "event's startTime and duration and type and description can not be empty"
        });
    }

        // Find event and update it with the request body
        Event.findByIdAndUpdate(req.params.eventId, {
            startTime: req.body.startTime,
            duration: req.body.duration,
            type: req.body.type,
            description: req.body.description,

        }, { new: true })
            .then(event => {
                if (!event) {
                    return res.status(404).send({
                        message: "event not found with id " + req.params.eventId
                    });
                }
                res.send(event);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    console.log(err)
                    return res.status(404).send({
                        message: "404 ObjectId error" + req.params.eventId
                    });
                }
                return res.status(500).send({
                    message: "Error updating event with id " + req.params.eventId
                });
            });

};

// Delete an event with the specified eventId in the request
exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.eventId)
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            res.send({ message: "event deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            return res.status(500).send({
                message: "Could not delete event with id " + req.params.eventId
            });
        });
};
