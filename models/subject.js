var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Subject = new Schema({
    name: {
        type: String,
          default: ''
      },
    semester: {
        type: Number,
          default: ''
    },
    branch: {
        type: String,
          default: ''
    }
});


module.exports = mongoose.model('Subject', Subject);