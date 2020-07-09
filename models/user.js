var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
var passportLocalMongoose = require('passport-local-mongoose');

const AttemptSchema = new Schema({
  subject: {
      type: String,
      required: true
  },
  flag: {
      type:Boolean,
      default:false
  },
  subjectId: {
    type:String,
    required:true
  },
  completionFlag: {
    type:Boolean,
      default:false
  }
}, {
  timestamps:true
});

var User = new Schema({
    firstname: {
        type: String,
          default: ''
      },
      lastname: {
        type: String,
          default: ''
      },
    admin:   {
        type: Boolean,
        default: false
    },
    student: {
        type:Boolean,
        default:false
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
    semester: {
        type: String,
          default: ''
    },
    contactno: {
        type: String,
          default: ''
    },
    attempted: [AttemptSchema],
    verified: {
      type:Boolean,
      default:false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);