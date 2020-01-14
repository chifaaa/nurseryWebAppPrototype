const mongoose = require('mongoose');

const MealSchema = mongoose.Schema({
    day: String,
    description: String,
}, );

module.exports = mongoose.model('Meal', MealSchema);
