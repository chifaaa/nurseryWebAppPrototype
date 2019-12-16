const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    groupName: String,
    // babiesList: Array
});
module.exports = mongoose.model('Group', GroupSchema);