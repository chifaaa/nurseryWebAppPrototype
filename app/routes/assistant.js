module.exports = (app) => {
    const assistants = require('../controllers/assistant.js');

    // Create a new Group
    app.post('/assistant/create', assistants.create);

    //  Retrieve all assistants
     app.get('/assistants', assistants.findAll);

    //  Retrieve a single assistant with assistantId
     app.get('/assistant/:assistantId', assistants.findOne);

    //  Update a assistant with assistantId
     app.put('/assistant/update/:assistantId', assistants.update);

    //  Delete a assistant with assistantId
     app.delete('/assistant/delete/:assistantId', assistants.delete);
}
