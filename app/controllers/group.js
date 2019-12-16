const Group = require('../models/group.js');

exports.fetch = (name)=> {
    return Group.findOne({name}).exec()
}

// exports.addBabyToGroup =(groupName,baby)=>{
//     return Group.findByIdAndUpdate(groupName,{
//       $push: {  babiesList: baby }   
//     }, { new: true }).exec()
//  }
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
        .then(groups => {
            res.send(groups.map(group => {
                groupObj = group.toObject()

                return groupObj
            }));
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the groups."
            });
        });
};

// Update a Group identified by the GroupId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!(req.body.groupName)) {
        return res.status(400).send({
            message: "Group's name can not be empty"
        });
    }
    // babyCtr.fetch(req.body.babyName).then(babyDoc => {
    //     if (!babyDoc) {
    //         return res.status(400).send({
    //             message: "this babyName  not exist"
    //         });

    //     }
        // Find Parent and update it with the request body
        Group.findByIdAndUpdate(req.params.id, {
            GroupName: req.body.groupName,


        }, { new: true })
        .then(group => {
            if (!group) {
                return res.status(404).send({
                    message: "group not found with id " + req.params.id
                });
            }
            res.send(group);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                console.log(err)
                return res.status(404).send({
                    message: "404 ObjectId error" + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating group with id " + req.params.id
            });
        });

};




    // Delete a Group with the specified noteId in the request
    exports.delete = (req, res) => {
        Group.findByIdAndRemove(req.params.id)
            .then(group => {
                if (!group) {
                    return res.status(404).send({
                        message: "group not found with id " + req.params.id
                    });
                }
                res.send({ message: "group deleted successfully!" });
            }).catch(err => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({
                        message: "group not found with id " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Could not delete group with id " + req.params.id
                });
            });
    };