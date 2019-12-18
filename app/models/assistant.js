const mongoose = require('mongoose');

const AssistantSchema = mongoose.Schema({
firstName: String,
lastName: String,
email: String,
adress: String,
tel:String,

assistantGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },


}, );

module.exports = mongoose.model('Assistant', AssistantSchema);
