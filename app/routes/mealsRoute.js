module.exports = (app) => {
    const meals = require('../controllers/meal.js');

    // Create a new Meal
    app.post('/meal/create', meals.create);

    //  Retrieve all meals
     app.get('/meals', meals.findAll);

    //  Retrieve a single meal with mealId
     app.get('/meal/:mealId', meals.findOne);

    //  Update a meal with mealId
     app.put('/meal/update/:mealId', meals.update);

    //  Delete a meal with mealId
     app.delete('/meal/delete/:mealId', meals.delete);
}
