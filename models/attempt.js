var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var User = require(user)

var Attempt = new Schema({
    
    attempt: {
        type: Object,
          required:true
      },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'ExamSchedule'
    },
    marks: {
        type: Number,
        required:true
    }
    
});

module.exports = mongoose.model('Attempt', Attempt);