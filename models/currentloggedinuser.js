var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurrentLoggedin = new Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    ip : {
        type : String,
        default:""
    },
    username: {
        type: String,
        default:""
    }

});


module.exports = mongoose.model('CurrentLoggedin', CurrentLoggedin);