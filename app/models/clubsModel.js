const mongoose = require('mongoose');

const ClubSchema = mongoose.Schema({
name: String,
description: String,
day: String,
}, );

module.exports = mongoose.model('Club', ClubSchema);
