var express = require('express');
var staffrouter = express.Router();
const bodyParser = require('body-parser');
var passport = require('passport');
var authenticate = require('../authenticate')
staffrouter.use(bodyParser.json());
var cors = require('./cors')
var shuffle = require('../config')
var Staff = require('../models/staff')
var login = require('../models/currentloggedinuser')
var app = require('../app')
var currentloggedinuser = require('../models/currentloggedinuser')
var subject = require('../models/subject')
var question = require('../models/questions')
staffrouter.route('/subject')
.get((req,res,next) => {
subject.find({branch:req.query.branch})
.then((subjects) => {
    res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json({subjects:subjects});
  },(err) => next(err))
  .catch((err) => next(err));
})
.post((req,res,next) => {
    subject.create(req.body)
    .then((subjects) => {
        res.statusCode = 200;
          res.setHeader('Content-Type','application/json');
          res.json({subjects:subjects});
      },(err) => next(err))
      .catch((err) => next(err));
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on this Operation /');
})
.delete((req,res,next) => {
    subject.findOneAndDelete(req.query.id)
    .then((subject) => {
        res.statusCode = 200;
          res.setHeader('Content-Type','application/json');
          res.json({subject:subject});
      },(err) => next(err))
      .catch((err) => next(err));
})

staffrouter.route('/subject/:subjectId')
.get((req,res,next) => {
    subject.findById(req.params.subjectId)
    .populate('comments.author')
    .then((subject) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({subject:subject});
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /'+ req.params.subjectId);
})
.put((req,res,next) => {
    subject.findByIdAndUpdate(req.params.subjectId, { $set : req.body}, {new:true} )
    .then((subject) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({subject:subject});
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req,res,next) => {
    subject.findByIdAndDelete(req.params.subjectId)
      .then((resp) => {
        console.log("Subject with ", req.params.subjectId,"gets removed succesfully");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

staffrouter.route('/question')
.post((req,res,next) => {
    console.log(req.body)
    question.find({question:req.body.question})
    .then((resp) => {
        if(resp.length!=0) {
            res.json('This Question is alredy added')
        }
        else {
            question.create(req.body)
    .then((question) => {
        res.statusCode = 200;
          res.setHeader('Content-Type','application/json');
          res.json({question:question});
      },(err) => next(err))
      .catch((err) => next(err));
        }
    })
    
})

module.exports = staffrouter;
