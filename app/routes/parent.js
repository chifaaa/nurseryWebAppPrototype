module.exports = (app) => {
    const parents = require('../controllers/parent.js');

    // Create a new Group
    app.post('/parent/create', parents.create);

    //  Retrieve all parents
     app.get('/parents', parents.findAll);

    //  Retrieve a single parent with parentId
     app.get('/parent/:parentId', parents.findOne);

    //  Update a parent with parentId
     app.put('/parent/update/:parentId', parents.update);

    //  Delete a parent with parentId
     app.delete('/parent/delete/:parentId', parents.delete);
}