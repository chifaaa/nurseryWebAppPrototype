const Group = require('../models/group.js');

exports.fetch = (groupName)=> {
    return Group.findOne({groupName}).exec()
}


exports.addBabyToGroup = (groupId, babyId) => {
    return Group.findByIdAndUpdate(groupId, {
        $push: { babies: babyId }
    }, { new: true }).exec()
}
// Create and Save a new Note
exports.create = (req, res) => {
    console.log('req', req)
    // Validate request
    if(!req.body.groupName) {
        return res.status(400).send({
            message: "group name can not be empty"
        });
    }

    // Create a Group
    const group = new Group({
        groupName: req.body.groupName
    });

    // Save Group in the database
    group.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the group in the database."
        });
    });
};



// Retrieve and return all groups from the database.
exports.findAll = (req, res) => {
    Group.find()
        .populate('babies')
        .then(groups => {
            res.send(groups);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the groups."
            });
        });
};

 // Find a single Group with a GroupId
exports.findOne = (req, res) => {
    Group.findById(req.params.groupId)
    .populate('babies')
    
        .then(group => {
            if (!group) {
                return res.status(404).send({
                    message: "group not found with id " + req.params.groupId
                });
            }
            res.send(group);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "group not found with id " + req.params.groupId
                });
            }
            return res.status(500).send({
                message: "Error retrieving group with id " + req.params.groupId
            });
        });
};

// Update a Group identified by the GroupId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!(req.body.groupName )) {
        return res.status(400).send({
            message: "Group's groupName can not be empty"
        });
    }
    // babyCtr.fetch(req.body.babyName).then(babyDoc => {
    //     if (!babyDoc) {
    //         return res.status(400).send({
    //             message: "this babyName  not exist"
    //         });

    //     }
        // Find Parent and update it with the request body
        Group.findByIdAndUpdate(req.params.groupId, {
            groupName: req.body.groupName

        }, { new: true })
            .then(group => {
                if (!group) {
                    return res.status(404).send({
                        message: "Group not found with id " + req.params.groupId
                    });
                }
                res.send(group);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    console.log(err)
                    return res.status(404).send({
                        message: "404 ObjectId error" + req.params.groupId
                    });
                }
                return res.status(500).send({
                    message: "Error updating group with id " + req.params.groupId
                });
            });
    // });
};

// Delete a Parent with the specified noteId in the request
exports.delete = (req, res) => {
    Group.findByIdAndRemove(req.params.groupId)
        .then(group => {
            if (!group) {
                return res.status(404).send({
                    message: "group not found with id " + req.params.groupId
                });
            }
            res.send({ message: "group deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "group not found with id " + req.params.groupId
                });
            }
            return res.status(500).send({
                message: "Could not delete group with id " + req.params.groupId
            });
        });
};




    