var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var passportLocalMongoose = require(passport-local-mongoose);

// var options = new Schema({
//     option : {
//         type:String,
//         required:true
//     }
//     }
//     ,{
//         timestamps:true
// });

var Question = new Schema({
    question: {
        type:String,
        required:true,
        unique:true,
        index:true
    },
    option1:{type:String},
    option2:{type:String},
    option3:{type:String},
    option4:{type:String},
    semester : {
        type:String,
        required:true
       },
       subject : {
           type:String,
           required:true
       },
        marks : {
            type:Number,
            required:true
        },
        minus : {
            type:Number,
            default:0
        },
        ans : {
            type:String,
            required:true
        }
    },
    
    {
    timestamps:true
});

var Question = mongoose.model('Question',Question);
module.exports = Question;


