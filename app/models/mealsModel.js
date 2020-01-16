const mongoose = require('mongoose');

const MealSchema = mongoose.Schema({
    day: Date,
    lunch: String,
    dessert: String,
    snack: String,
}, );

module.exports = mongoose.model('Meal', MealSchema);
