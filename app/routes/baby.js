module.exports = (app) => {
    const babies = require('../controllers/baby.js');

    // Create a new Group
    app.post('/baby/create', babies.create);

    //  Retrieve all Babies
     app.get('/babies', babies.findAll);

    //  Retrieve a single Baby with babyId
     app.get('/baby/:babyId', babies.findOne);

    //  Update a Baby with babyId
     app.put('/baby/update/:babyId', babies.update);

    //  Delete a Baby with babyId
     app.delete('/baby/delete/:babyId', babies.delete);
}