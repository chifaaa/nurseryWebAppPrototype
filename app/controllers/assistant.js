const Assistant = require('../models/assistant.js');
const groupCtr = require('./group');


// exports.addBaby =(assistantId,babyId)=>{
//    return Assistant.findByIdAndUpdate(assistantId,{
//        babies:[babyId]
//    }, { new: true }).exec()
// }


// Create and Save a new Assistant
exports.create = (req, res) => {
    console.log("assistant create was called")
    // Validate request
    if (!(req.body.firstName && req.body.lastName && req.body.tel && req.body.email && req.body.adress && req.body.groupName)) {
        return res.status(400).send({
            message: "Assistant's firstname and lastname and tel and adress and email and groupName can not be empty"
        });
    }

    //many things to wait   ==> await

    // const babyPromise = babyCtr.fetch(req.body.babyName)
    // Create an Assistant
 

    const groupPromise = groupCtr.fetch(req.body.groupName)
    // Create a Baby
    groupPromise.then(groupDoc => {
        if (!groupDoc) {
            return res.status(400).send({
                message: "this groupName  not exist"
            });

        }



    const assistant = new Assistant({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        adress: req.body.adress,
        tel: req.body.tel,
        assistantGroup: groupDoc._id
    });
    // same thing for clubs

    // Save Assistant in the database


    assistant.save()
    .then(assistantDoc => {

        groupCtr.addAssistantToGroup(assistantDoc.assistantGroup, assistantDoc._id)
        .then((groupDoc) => res.send(groupDoc))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating group."
            });
        });  

    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while saving the assistant."
        });
    });
}
)


};



exports.findAll = (req, res) => {
    Assistant.find()
        .populate('assistantGroup')
        .then(assistants => {
            res.send(assistants.map(assistant => {
                assistantObj = assistant.toObject()
                if (assistantObj.assistantGroup) {
                    assistantObj.groupName = assistantObj.assistantGroup.groupName
                    delete assistantObj.assistantGroup
                }
                return assistantObj
            }));
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving assistants."
            });
        });
};

// Find a single Assistant with a AssistantId
exports.findOne = (req, res) => {
    Assistant.findById(req.params.assistantId)
        .then(assistant => {
            if (!assistant) {
                return res.status(404).send({
                    message: "Assistant not found with id " + req.params.assistantId
                });
            }
            res.send(assistant);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Assistant not found with id " + req.params.assistantId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Assistant with id " + req.params.assistantId
            });
        });
};

// Update a Assistant identified by the AssistantId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!(req.body.firstName && req.body.lastName && req.body.tel && req.body.email&& req.body.adress  && req.body.groupName)) {
        return res.status(400).send({
            message: "Assistant's firstname and lastname and  tel and adress and email and groupName can not be empty"
        });
    }
    groupCtr.fetch(req.body.groupName).then(groupDoc => {
        if (!groupDoc) {
            return res.status(400).send({
                message: "this groupName  not exist"
            });

        }
        // Find Assistant and update it with the request body
        Assistant.findByIdAndUpdate(req.params.assistantId, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            adress: req.body.adress,
            assistantGroup: groupDoc._id,
            

        }, { new: true })
            .then(assistant => {
                if (!assistant) {
                    return res.status(404).send({
                        message: "Assistant not found with id " + req.params.assistantId
                    });
                }
                res.send(assistant);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    console.log(err)
                    return res.status(404).send({
                        message: "404 ObjectId error" + req.params.assistantId
                    });
                }
                return res.status(500).send({
                    message: "Error updating Assistant with id " + req.params.assistantId
                });
            });
    });
};

// Delete a Assistant with the specified noteId in the request
exports.delete = (req, res) => {
    Assistant.findByIdAndRemove(req.params.assistantId)
        .then(assistant => {

            groupCtr.removeAssistantFromGroup(assistant.assistantGroup, assistant._id)
            .then((groupDoc) => res.send(groupDoc))

            if (!assistant) {
                return res.status(404).send({
                    message: "Assistant not found with id " + req.params.assistantId
                });
            }
            res.send({ message: "Assistant deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Assistant not found with id " + req.params.assistantId
                });
            }
            return res.status(500).send({
                message: "Could not delete Assistant with id " + req.params.assistantId
            });
        });
};
