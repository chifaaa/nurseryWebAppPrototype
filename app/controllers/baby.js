const Baby = require('../models/baby.js');
const groupCtr = require('./group.js');
const parentCtr = require('./parent.js');


exports.fetch = (name) => {
    return Baby.findOne({ name }).exec()
}
// Create and Save a new Baby
exports.create = (req, res) => {
    // Validate request
    if (!(req.body.firstName && req.body.lastName && req.body.birthdate && req.body.groupName)) {
        return res.status(400).send({
            message: "baby's firstname and lastname and birthdate and groupName can not be empty"
        });
    }

    //many things to wait   ==> await

    const groupPromise = groupCtr.fetch(req.body.groupName)
    // Create a Baby
    groupPromise.then(groupDoc => {
        if (!groupDoc) {
            return res.status(400).send({
                message: "this groupName  not exist"
            });

        }

        const baby = new Baby({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthdate: req.body.birthdate,
            group: groupDoc._id,
            sex: req.body.sex
        });
        // same thing for clubs

        // Save baby in the database
        baby.save()
            .then(babyDoc => {
                parentCtr.addBaby(req.body.parentId, babyDoc._id)
                    .then((parentDoc) => res.send(parentDoc))
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while updating parent."
                        });
                    });
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while saving the baby."
                });
            });
    }
    )





};

// Retrieve and return all babies from the database.
exports.findAll = (req, res) => {
    Baby.find()
        .populate('group', 'name')
        .then(babies => {
            res.send(babies.map(baby => {
                babyObj = baby.toObject()
                if (babyObj.group) {
                    babyObj.groupName = babyObj.group.name
                    delete babyObj.group
                }
                return babyObj
            }));
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
    if (!(req.body.firstName && req.body.lastName && req.body.birthdate && req.body.groupName && req.body.sex)) {
        return res.status(400).send({
            message: "baby's firstname and lastname and birthdate and groupName can not be empty"
        });
    }
    groupCtr.fetch(req.body.groupName).then(groupDoc => {
        if (!groupDoc) {
            return res.status(400).send({
                message: "this groupName  not exist"
            });

        }
        // Find baby and update it with the request body
        Baby.findByIdAndUpdate(req.params.babyId, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthdate: req.body.birthdate,
            sex: req.body.sex,
            group: groupDoc._id

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
                    console.log(err)
                    return res.status(404).send({
                        message: "404 ObjectId error" + req.params.babyId
                    });
                }
                return res.status(500).send({
                    message: "Error updating baby with id " + req.params.babyId
                });
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
