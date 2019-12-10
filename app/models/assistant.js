const mongoose = require('mongoose');

const AssistantSchema = mongoose.Schema({
    firstName: String,
lastName: String,
email: String,
adress: String,
tel:String,
babies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Baby' }],
}, );

module.exports = mongoose.model('Assistant', AssistantSchema);
