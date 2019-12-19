const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    groupName: String,
    babies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Baby' }],
    
});
module.exports = mongoose.model('Group', GroupSchema);