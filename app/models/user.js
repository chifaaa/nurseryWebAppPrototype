const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
      _id: mongoose.Schema.Types.ObjectId,
      password:String,
      registerDate: Date,
      firstName: String,
      lastName: String,
      email: String,
      role: Number,
      adress: String,
      phone: String,
      type: String, // admin, parent, auxiliaire 
      babies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Baby' }], //only for type="parent"
      group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' } //only for type="auxiliare"
    }
    );
    module.exports = mongoose.model('User', UserSchema);
    