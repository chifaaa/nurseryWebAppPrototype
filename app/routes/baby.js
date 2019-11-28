module.exports = (app) => {
    const babies = require('../controllers/baby.js');

    // Create a new Group
    app.post('/create/baby', babies.create);

    //  Retrieve all Babies
     app.get('/babies', babies.findAll);

    //  Retrieve a single Baby with babyId
     app.get('/babies/:babyId', babies.findOne);

    //  Update a Baby with babyId
     app.put('/babies/:babyId', babies.update);

    //  Delete a Baby with babyId
     app.delete('/babies/:babyId', babies.delete);
}