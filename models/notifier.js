var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var User = require(user)

var Notifier = new Schema({
    

    user : {
        type: String,
        required:true
    },
    subject: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'ExamSchedule'
    }
});

module.exports = mongoose.model('Notifier', Notifier);