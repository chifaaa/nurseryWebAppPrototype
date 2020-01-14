module.exports = (app) => {
    const events = require('../controllers/event.js');

    // Create a new event
    app.post('/event/create', events.create);

    //  Retrieve all events
     app.get('/events', events.findAll);

    //  Retrieve a single event with eventId
     app.get('/event/:eventId', events.findOne);

    //  Update an event with eventId
     app.put('/event/update/:eventId', events.update);

    //  Delete an event with eventId
     app.delete('/event/delete/:eventId', events.delete);
}