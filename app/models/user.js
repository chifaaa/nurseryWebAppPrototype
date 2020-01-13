const mongoose = require('mongoose');
const Schema = mongoose.Schema


const UserSchema = new Schema(
    {
      // _id: Schema.Types.ObjectId,

      // password:String,
      // registerDate: Date,
      firstName:{
       type: String
      } ,
      lastName:{
        type:String
      } ,
      email:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      },
      date:{
        type:Date,
        default:Date.now
      }

      // adress: String,
      // phone: String,
      // type: String, // admin, parent, auxiliaire 
      // babies: [{ type: Schema.Types.ObjectId, ref: 'Baby' }], //only for type="parent"
      // group: { type: Schema.Types.ObjectId, ref: 'Group' } //only for type="auxiliare"
    }
    );
    module.exports = mongoose.model('User', UserSchema);
    