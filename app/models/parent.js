const mongoose = require('mongoose');

const ParentSchema = mongoose.Schema({
    firstName: String,
lastName: String,
email: String,
adress: String,
tel:String,
sex:String,
babies:Array
// babies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Baby' }],

}, );

module.exports = mongoose.model('Parent', ParentSchema);