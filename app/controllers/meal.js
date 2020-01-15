const Meal = require('../models/mealsModel.js');



// Create and Save a new meal
exports.create = (req, res) => {
    console.log("meal create was called")
    // Validate request
    if (!(req.body.day && req.body.mainMeal)) {
        return res.status(400).send({
            message: "meals's day and mainMeal can not be empty"
        });
    }

    //many things to wait   ==> await
    
    // Create a meal
    const meal = new Meal({
        day: req.body.day,
        mainMeal: req.body.mainMeal,
        dessert: req.body.dessert,
        snack: req.body.snack,

    });

    // Save the meal in the database

    meal.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the meal."
            });
        });

};




// Retrieve and return all the meals from the database.
exports.findAll = (req, res) => {
    Meal.find()
    .then(meals => {
        res.send(meals);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the meals."
        });
    });
};


// Find a single meal with a mealId
exports.findOne = (req, res) => {
    Meal.findById(req.params.mealId)
        .then(meal => {
            if (!meal) {
                return res.status(404).send({
                    message: "meal not found with id " + req.params.mealId
                });
            }
            res.send(meal);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "meal not found with id " + req.params.mealId
                });
            }
            return res.status(500).send({
                message: "Error retrieving meal with id " + req.params.mealId
            });
        });
};

// Update a meal identified by the mealId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!(req.body.day && req.body.mainMeal)) {
        return res.status(400).send({
            message: "meal's day and mainMeal can not be empty"
        });
    }

        // Find meal and update it with the request body
        Meal.findByIdAndUpdate(req.params.mealId, {
            day: req.body.day,
            mainMeal: req.body.mainMeal,
            dessert: req.body.dessert,
            snack: req.body.snack,


        }, { new: true })
            .then(meal => {
                if (!meal) {
                    return res.status(404).send({
                        message: "meal not found with id " + req.params.mealId
                    });
                }
                res.send(meal);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    console.log(err)
                    return res.status(404).send({
                        message: "404 ObjectId error" + req.params.mealId
                    });
                }
                return res.status(500).send({
                    message: "Error updating meal with id " + req.params.mealId
                });
            });

};

// Delete a meal with the specified mealId in the request
exports.delete = (req, res) => {
    Meal.findByIdAndRemove(req.params.mealId)
        .then(meal => {
            if (!meal) {
                return res.status(404).send({
                    message: "meal not found with id " + req.params.mealId
                });
            }
            res.send({ message: "meal deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "meal not found with id " + req.params.mealId
                });
            }
            return res.status(500).send({
                message: "Could not delete meal with id " + req.params.mealId
            });
        });
};