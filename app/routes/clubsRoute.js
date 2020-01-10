module.exports = (app) => {
    const clubs = require('../controllers/club.js');

    // Create a new Group
    app.post('/club/create', clubs.create);

    //  Retrieve all clubs
     app.get('/clubs', clubs.findAll);

    //  Retrieve a single club with clubId
     app.get('/club/:clubId', clubs.findOne);

    //  Update a club with clubId
     app.put('/club/update/:clubId', clubs.update);

    //  Delete a club with clubId
     app.delete('/club/delete/:clubId', clubs.delete);
}
