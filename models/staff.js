var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var Staff = new Schema({
    firstname: {
        type: String,
          default: ''
      },
    lastname: {
        type: String,
          default: ''
      },
    staff : {
        type:Boolean,
        default:false
    },
    email: {
        type: String,
          default: ''
    },
    branch: {
        type: String,
          default: ''
    },
    contactno: {
        type: String,
          default: ''
    }
});

Staff.plugin(passportLocalMongoose);

module.exports = mongoose.model('Staff', Staff);