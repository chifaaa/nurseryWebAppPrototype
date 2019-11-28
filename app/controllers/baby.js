const Baby = require('../models/baby.js');
const groupCtr = require('./group.js');

// Create and Save a new Baby
exports.create = (req, res) => {
    console.log('req', req)
    // Validate request
    if (!(req.body.firstName && req.body.lastName && req.body.birthdate)) {
        return res.status(400).send({
            message: "baby's firstname and lastname and birthdate and group can not be empty"
        });
    }

    //many things to wait   ==> await

    const groupPromise = groupCtr.fetch(req.body.groupName)
    // Create a Baby
    groupPromise.then(doc => {

        const baby = new Baby({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthdate: req.body.birthdate,
             group: doc._id
        });
        // same thing for clubs
    })





    // Save baby in the database
    baby.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the baby."
            });
        });
};

// Retrieve and return all babies from the database.
exports.findAll = (req, res) => {
    baby.find()
        .then(babies => {
            res.send(babies);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving babies."
            });
        });
};

// Find a single baby with a babyId
exports.findOne = (req, res) => {
    Baby.findById(req.params.babyId)
        .then(baby => {
            if (!baby) {
                return res.status(404).send({
                    message: "baby not found with id " + req.params.babyId
                });
            }
            res.send(baby);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Baby not found with id " + req.params.babyId
                });
            }
            return res.status(500).send({
                message: "Error retrieving baby with id " + req.params.babyId
            });
        });
};

// Update a baby identified by the babyId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!(req.body.firstName && req.body.lastName && req.body.birthdate && req.body.groupName)) {
        return res.status(400).send({
            message: "baby's firstname and lastname and birthdate and group can not be empty"
        });
    }

    // Find baby and update it with the request body
    Baby.findByIdAndUpdate(req.params.babyId, {
        firstName: req.body.firstName || "Untitled Baby",
        lastName: req.body.lastName,
        birthdate: req.body.birthdate,
        sex: req.body.sex,
        group: req.body.group

    }, { new: true })
        .then(baby => {
            if (!baby) {
                return res.status(404).send({
                    message: "Baby not found with id " + req.params.babyId
                });
            }
            res.send(baby);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Baby not found with id " + req.params.babyId
                });
            }
            return res.status(500).send({
                message: "Error updating baby with id " + req.params.babyId
            });
        });
};

// Delete a baby with the specified noteId in the request
exports.delete = (req, res) => {
    Baby.findByIdAndRemove(req.params.babyId)
        .then(baby => {
            if (!baby) {
                return res.status(404).send({
                    message: "Baby not found with id " + req.params.babyId
                });
            }
            res.send({ message: "Baby deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "baby not found with id " + req.params.babyId
                });
            }
            return res.status(500).send({
                message: "Could not delete baby with id " + req.params.babyId
            });
        });
};
