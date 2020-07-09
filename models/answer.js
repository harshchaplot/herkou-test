var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var User = require(user)

var Result = new Schema({
    
    marks: {
        type: Number,
        
          required:true
      },
    branch:   {
        type: String,
        
        required:true
    },
    semester: {
        type: String,
        
          required:true
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: String,
        required: true
    },
    subjectId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Result', Result);