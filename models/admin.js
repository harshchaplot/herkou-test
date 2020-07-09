var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
var passportLocalMongoose = require('passport-local-mongoose');

var ExamSchedule = new Schema({
    subject: {
        type: String,
        required:true
      },
    time: {
        type: String,
        required:true
      },
    date: {
        type: Date,
        required:true
      },
    branch:   {
        type: String,
        required:true
    },
    semester: {
        type: Number,
        required:true
    },
    completed: {
        type:Boolean,
        default:false
    },
    duration: {
        type:Number,
        required:true
    },
    completionTime: {
      type:String,
      required:true
    }
});

// ExamSchedule.plugin(passportLocalMongoose);

module.exports = mongoose.model('ExamSchedule', ExamSchedule);