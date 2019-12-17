module.exports = (app) => {
    const groupCtr = require('../controllers/group.js');

    // Create a new Group
    app.post('/create/group', groupCtr.create);

     //  Retrieve all groups
     app.get('/groups', groupCtr.findAll);

    // //  Retrieve a single parent with parentId
    //  app.get('/group/:groupId', groupCtr.findOne);

    //  Update a parent with parentId
     app.put('/group/update/:groupId', groupCtr.update);

    //  Delete a parent with parentId
     app.delete('/group/delete/:groupId', groupCtr.delete);

}