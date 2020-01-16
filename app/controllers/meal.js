const Meal = require('../models/mealsmodel.js');



// Create and Save a new Meal
exports.create = (req, res) => {
    console.log(" Meal create was called")
    // Validate request
    if (!(req.body.day && req.body.lunch && req.body.dessert && req.body.snack)) {
        return res.status(400).send({
            message: "Meal's lunch and day can not be empty"
        });
    }

    //many things to wait   ==> await
    
    // Create a Meal
    const meal = new Meal({
        day: req.body.day,
        lunch: req.body.lunch,
        dessert: req.body.dessert,
        snack: req.body.snack,
        

    });

    // Save the Meal in the database

    meal.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Meal."
            });
        });

};




// Retrieve and return all the Meals from the database.
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


// Find a single Meal with a mealId
exports.findOne = (req, res) => {
    Meal.findById(req.params.mealId)
        .then(meal => {
            if (!meal) {
                return res.status(404).send({
                    message: "Meal not found with id " + req.params.mealId
                });
            }
            res.send(meal);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Meal not found with id " + req.params.mealId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Meal with id " + req.params.mealId
            });
        });
};

// Update a Meal identified by the mealId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!(req.body.day && req.body.lunch && req.body.dessert && req.body.snack)) {
        return res.status(400).send({
            message: "Meal's lunch and day can not be empty"
        });
    }

        // Find Meal and update it with the request body
        Meal.findByIdAndUpdate(req.params.mealId, {
            day: req.body.day,
            lunch: req.body.lunch,
            dessert: req.body.dessert,
            snack: req.body.snack,
          
            

        }, { new: true })
            .then(meal => {
                if (!meal) {
                    return res.status(404).send({
                        message: "Meal not found with id " + req.params.mealId
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
                    message: "Error updating Meal with id " + req.params.mealId
                });
            });

};

// Delete a Meal with the specified mealId in the request
exports.delete = (req, res) => {
    Meal.findByIdAndRemove(req.params.mealId)
        .then(meal => {
            if (!meal) {
                return res.status(404).send({
                    message: "Meal not found with id " + req.params.mealId
                });
            }
            res.send({ message: "Meal deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Meal not found with id " + req.params.mealId
                });
            }
            return res.status(500).send({
                message: "Could not delete Meal with id " + req.params.mealId
            });
        });
};
