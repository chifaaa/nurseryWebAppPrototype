const Parent = require('../models/parent.model.js');

// Create and Save a new Parent
exports.create = (req, res) => {
    console.log('req', req)
    // Validate request
    if (!(req.body.firstName && req.body.lastName && req.body.birthdate && req.body.groupName)) {
        return res.status(400).send({
            message: "parent's firstname and lastname and birthdate and groupName can not be empty"
        });
    }

    //many things to wait   ==> await

    const groupPromise = babyCtr.fetch(req.body.babyName)
    // Create a Parent
    groupPromise.then(babyDoc => {
        if (!babyDoc) {
            return res.status(400).send({
                message: "this babyName  not exist"
            });

        }

        const parent = new Parent({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            tel:req.body.tel,
            adress:req.body.adress
            baby: babyDoc._id
        });
        // same thing for clubs

        // Save parent in the database
        parent.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the parent."
                });
            });
    }
    )





};

// Retrieve and return all parents from the database.
exports.findAll = (req, res) => {
    Parent.find()
    .then(parents => {
        res.send(parents);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving parents."
        });
    });
};

// Find a single parent with a parentId
exports.findOne = (req, res) => {
    Parent.findById(req.params.parentId)
    .then(parent => {
        if(!parent) {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.parentId
            });            
        }
        res.send(parent);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.parentId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving parent with id " + req.params.parentId
        });
    });
};

// Update a parent identified by the parentId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Parent content can not be empty"
        });
    }

    // Find parent and update it with the request body
    Parent.findByIdAndUpdate(req.params.parentId, {
        title: req.body.title || "Untitled Parent",
        content: req.body.content
    }, {new: true})
    .then(parent => {
        if(!parent) {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.parentId
            });
        }
        res.send(parent);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.parentId
            });                
        }
        return res.status(500).send({
            message: "Error updating parent with id " + req.params.parentId
        });
    });
};

// Delete a parent with the specified parentId in the request
exports.delete = (req, res) => {
    Parent.findByIdAndRemove(req.params.parentId)
    .then(parent => {
        if(!parent) {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.parentId
            });
        }
        res.send({message: "Parent deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.parentId
            });                
        }
        return res.status(500).send({
            message: "Could not delete parent with id " + req.params.parentId
        });
    });
};
