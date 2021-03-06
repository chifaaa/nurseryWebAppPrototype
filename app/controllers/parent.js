const Parent = require('../models/parent.js');
const babyCtr = require('./baby');

exports.addBaby = (parentId, babyId) => {
    return Parent.findByIdAndUpdate(parentId, {
        $push: { babies: babyId }
    }, { new: true }).exec()
}
exports.removeBabyFromParent = (parentId, babyId) => {
    return Parent.findByIdAndUpdate(parentId, {
        $pull: { babies: babyId }


    }, { new: true }).exec()
}
// Create and Save a new Parent
exports.create = (req, res) => {
    console.log("parent create was called")
    // Validate request
    if (!(req.body.firstName && req.body.lastName && req.body.tel && req.body.email && req.body.adress && req.body.sex)) {
        return res.status(400).send({
            message: "Parent's firstname and lastname and tel and adress and email and sex can not be empty"
        });
    }

    //many things to wait   ==> await    // Create a Parent


    const parent = new Parent({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        adress: req.body.adress,
        sex: req.body.sex,

        tel: req.body.tel
    });
    // same thing for clubs

    // Save Parent in the database
    parent.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Parent."
            });
        });
}








// Retrieve and return all parents from the database.
exports.findAll = (req, res) => {
    Parent.find()
        .populate('babies')
        .then(parents => {
            res.send(parents);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving parents."
            });
        });
};

// Find a single Parent with a ParentId
exports.findOne = (req, res) => {
    Parent.findById(req.params.parentId)
    .populate('babies')
    
        .then(parent => {
            if (!parent) {
                return res.status(404).send({
                    message: "Parent not found with id " + req.params.parentId
                });
            }
            res.send(parent);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Parent not found with id " + req.params.parentId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Parent with id " + req.params.ParentId
            });
        });
};

// Update a Parent identified by the ParentId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!(req.body.firstName && req.body.lastName && req.body.tel && req.body.email && req.body.adress && req.body.sex)) {
        return res.status(400).send({
            message: "Parent's firstname and lastname and  tel and adress and email can not be empty"
        });
    }

        // Find Parent and update it with the request body
        Parent.findByIdAndUpdate(req.params.parentId, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            adress: req.body.adress,
            sex: req.body.sex

        }, { new: true })
            .then(parent => {
                if (!parent) {
                    return res.status(404).send({
                        message: "Parent not found with id " + req.params.parentId
                    });
                }
                res.send(parent);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    console.log(err)
                    return res.status(404).send({
                        message: "404 ObjectId error" + req.params.parentId
                    });
                }
                return res.status(500).send({
                    message: "Error updating Parent with id " + req.params.parentId
                });
            });

};

// Delete a Parent with the specified noteId in the request
exports.delete = (req, res) => {
    Parent.findByIdAndRemove(req.params.parentId)
        .then(parent => {
            if (!parent) {
                return res.status(404).send({
                    message: "Parent not found with id " + req.params.parentId
                });
            }
            res.send({ message: "Parent deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Parent not found with id " + req.params.parentId
                });
            }
            return res.status(500).send({
                message: "Could not delete Parent with id " + req.params.parentId
            });
        });
};
