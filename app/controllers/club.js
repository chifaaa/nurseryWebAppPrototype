const Club = require('../models/clubsmodel.js');



// Create and Save a new Club
exports.create = (req, res) => {
    console.log("Club create was called")
    // Validate request
    if (!(req.body.name && req.body.day)) {
        return res.status(400).send({
            message: "Club's name and day can not be empty"
        });
    }

    //many things to wait   ==> await
    
    // Create a Club
    const club = new Club({
        name: req.body.name,
        description: req.body.description,
        day: req.body.day,

    });

    // Save the Club in the database

    club.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Club."
            });
        });

};




// Retrieve and return all the Clubs from the database.
exports.findAll = (req, res) => {
    Club.find()
    .then(clubs => {
        res.send(clubs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the clubs."
        });
    });
};


// Find a single Club with a clubId
exports.findOne = (req, res) => {
    Club.findById(req.params.clubId)
        .then(club => {
            if (!club) {
                return res.status(404).send({
                    message: "Club not found with id " + req.params.clubId
                });
            }
            res.send(club);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Club not found with id " + req.params.clubId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Club with id " + req.params.clubId
            });
        });
};

// Update a Club identified by the clubId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!(req.body.name && req.body.day)) {
        return res.status(400).send({
            message: "Club's name and day can not be empty"
        });
    }

        // Find Club and update it with the request body
        Club.findByIdAndUpdate(req.params.clubId, {
            name: req.body.name,
            description: req.body.description,
            day: req.body.day,
            

        }, { new: true })
            .then(club => {
                if (!club) {
                    return res.status(404).send({
                        message: "Club not found with id " + req.params.clubId
                    });
                }
                res.send(club);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    console.log(err)
                    return res.status(404).send({
                        message: "404 ObjectId error" + req.params.clubId
                    });
                }
                return res.status(500).send({
                    message: "Error updating Club with id " + req.params.clubId
                });
            });

};

// Delete a Club with the specified noteId in the request
exports.delete = (req, res) => {
    Club.findByIdAndRemove(req.params.clubId)
        .then(club => {
            if (!club) {
                return res.status(404).send({
                    message: "Club not found with id " + req.params.clubId
                });
            }
            res.send({ message: "Club deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Club not found with id " + req.params.clubId
                });
            }
            return res.status(500).send({
                message: "Could not delete Club with id " + req.params.clubId
            });
        });
};
