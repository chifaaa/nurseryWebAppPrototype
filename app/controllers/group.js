const Group = require('../models/group.js');

exports.fetch = (name)=> {
    return Group.findOne({name}).exec()
}

// Create and Save a new Note
exports.create = (req, res) => {
    console.log('req', req)
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "group name can not be empty"
        });
    }

    // Create a Group
    const group = new Group({
        name: req.body.name
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







    