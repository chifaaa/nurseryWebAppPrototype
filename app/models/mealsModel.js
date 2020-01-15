const mongoose = require('mongoose');

const MealSchema = mongoose.Schema({
day: Date,
mainMeal: String,
dessert: String,
snack: String,

}, );

module.exports = mongoose.model('Meal', MealSchema);
