const mongoose = require('mongoose');

const EventSchema = mongoose.Schema(
{
startTime: String,
duration: String,
type: String,
description: String,
 baby: { type: mongoose.Schema.Types.ObjectId, ref: 'Baby' }, 

// clubs: [{ type: Schema.Types.ObjectId, ref: 'Club' }]
}
);
module.exports = mongoose.model('Event', EventSchema);