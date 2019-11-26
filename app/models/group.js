const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String
});
module.exports = mongoose.model('Group', GroupSchema);