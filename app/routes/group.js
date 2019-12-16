module.exports = (app) => {
    const groupCtr = require('../controllers/group.js');

    // Create a new Group
    app.post('/create/group', groupCtr.create);

    // // Retrieve all groups
    app.get('/groups', groupCtr.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    //  Update a group with groupName
    app.put('/group/update/:id', groupCtr.update);

    //  Delete a group with groupName
     app.delete('/group/delete/:id', groupCtr.delete)}
