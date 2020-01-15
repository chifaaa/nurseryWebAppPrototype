const mongoose = require('mongoose');

const BabySchema = mongoose.Schema(
{
// _id: Schema.Types.ObjectId,
firstName: String,
lastName: String,
birthdate: Date,
sex: String,
 parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' },   
 group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' }, 
 events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],

// clubs: [{ type: Schema.Types.ObjectId, ref: 'Club' }]
}
);
module.exports = mongoose.model('Baby', BabySchema);