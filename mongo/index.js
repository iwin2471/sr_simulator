import mongoose from 'mongoose';
import rndString from "randomstring";

var name = require('../package.json');
var db = mongoose.connect('mongodb://localhost/'+name.name);
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id: {type: String, unique: true},
  passwd: {type: String},
  nick_name: {type: String},
  state:{
    day: {type: Number, default: 1},
    hours: {type: Number, default: 0},
    statBarData: {
      happiness: {type: Number, default: 80},
      coding: {type: Number, default: 80},
      dating: {type: Number, default: 80},
      health: {type: Number, default: 80}
    }
  }
});


require('./err')(UsersSchema, rndString);

var Users = mongoose.model("users", UsersSchema);

exports.Users = Users;

export default db;
