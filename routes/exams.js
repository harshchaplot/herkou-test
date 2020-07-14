var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');
var authenticate = require('../authenticate')
var question = require('../models/questions');
var Answer = require('../models/answer');
var admin = require('../models/admin');
var AdminExamSchedule = require('../models/admin');
var notify = require('../models/notifier');
var nodemailer = require('nodemailer');
router.use(bodyParser.json());

const { route } = require('.');
var result = {};
var mapping = {};
var a = [];
var b =[];
var e;
var Attempt = require('../models/attempt');
const attempt = require('../models/attempt');
emailArray = []
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('d');
// console.log(formatted);

var schedule = require('node-schedule');
const user = require('../models/user');
const subject = require('../models/subject');
 
// var j = schedule.scheduleJob('10 * * * * *', function(){
//   AdminExamSchedule.find()
//   .then((exams) => {
//     emailArray = []
//     // console.log(exams);
    
//     // date = new Date(exams[2]['date']);
//     // year = date.getFullYear();
//     // month = date.getMonth()+1;
//     // dt1 = date.getDate();
//     // function statusCounter(inputs) {
//     //   let counter = 0;
//     //   for (const input of inputs) {
//     //     if (input.status == 0) counter += 1;
//     //   }
//     //   return counter;
//     // }
//     // len = statusCounter(exams)
//     // console.log(len);
//     // const count = exams.filter(item => item.status === '0').length;
//     // console.log(count);
//     i=0
//     while(exams[i]) {
//     // for(var i=0;i<count;i++) {
//       date = new Date(exams[i]['date'])
      
//       dt1 = date.getDate();
//       if (dt1 < 10) {
//         dt1 = '0' + dt1;
//       }
  
//       console.log(dt1);
//       if(dt1 == formatted) {
//         emailArray.push(exams[i]['_id'])
//       }
//       i++
//     }

//     for(var i =0;i<emailArray.length;i++) {
//       notify.find({subject:emailArray[i]})
//       .then((users) => {
//         console.log(users);
//         j=0
//         while(users[j]) {
//           email = users[j]['user']
//           var subject1 = users[j]['subject']['subject']
//           console.log(subject1);
          

//           var smtpTransport = nodemailer.createTransport({
//             service: "Gmail",
//             auth: {
//                 user: "gajjarrutvik291@gmail.com",
//                 pass: "recrhkeqfikbgrjs"
//             }
//           });
//          // rand=Math.floor((Math.random() * 100) + 54);
            
//               mailOptions={
//                   to : email,
//                   subject : "Regarding Examination",
//                   html : "Your Examination" + subject1 + "ABCD" 
//               }
//               console.log(mailOptions);
              
//               smtpTransport.sendMail(mailOptions, function(error, response){
//                if(error){
//                     console.log(error);
//                     res.send('<h1>Incorrect email</h1>');
//                   return res.end("error");
//                }else{
//                 console.log(response);
//                     // console.log("Message sent: " + response.message);
//                    }
//               });

//           j++
//         }
        
//       })
//     }
//     // if (dt < 10) {
//       // dt = '0' + dt;
//     // }
//     console.log(formatted);
    
//   })
// });
router.route('/notify')
.get((req,res,next) => {
  notify.find()
  .populate('subject')
  .then((resp) => {
    console.log(resp);
    
  })
})
.post(authenticate.verifyUser,(req,res,next) => {
  req.body.user = req.user.email
  notify.create(req.body)
  .then((resp) => {
    console.log(resp);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(resp);

  },(err) => next(err))
  .catch((err) => next(err));
});


router.get('/',  function(req, res, next) {
  let random = [];
  // let a = [];
  // admin.find({},{branch:1,semester:1}, (err,res) => {
    admin.find({},{subject:1}, (err,res) => {
    // console.log('top');
    if(err) {console.log(err);}
    else {e=res;}
    // console.log('in');
    // console.log(e);
  })
  
  var timer = setInterval(async function v(){
    for(var i =0; i < e.length; i++) {
    // console.log(e[i].branch);
    a[i] = e[i].subject
    // a[i] = e[i].branch

    // b[i] = e[i].semester
    // console.log('before')
    // console.log(a[i])
    // console.log(i)
    
    await sleep(2000)
    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
      } 
      // console.log('after') 
      // console.log(i)
    // question.find({branch:e[i].branch,semester:e[i].semester}, (err,res) => {
      question.find({subject:e[i].subject}, (err,res) => {
      
      if(err) {console.log(err);}
      else {result[a[i-1]] = res;}
    })  
    } clearInterval(timer);
  },3000);
  
  
  var timer1 = setInterval(function(){console.log('abcdefghijklmnopqrstuvwxyz'); console.log(result);
     clearInterval(timer1);
    },20000);
  
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(result['CSE3']);
  }, (err) => next(msg));
  

router.get('/exams',function(req,res,next) {
  count = 0  
  for(var i=0;i++;) {
      if(result[req.query.subject][i]) {
        count++
      }
    }
    console.log(count);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(result[req.query.subject][req.query.id]);

  }, (err) => next(msg));

  router.route('/result')
  .get(authenticate.verifyEmail,authenticate.verifyUser, (req,res,next) => {
    Answer.find({branch:req.query.branch,semester:req.query.semester,user:req.user._id})
    .populate('user')
    .then((result) => {
      console.log(result)
      res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json(result);
  },(err) => next(err))
  .catch((err) => next(err));

  })
  .post(authenticate.verifyUser,(req,res,next) => {
    // console.log(req.query.branch)
    // console.log(req.query.semester)
    console.log(req.body)
    req.body.user = req.user._id
    console.log(req.body)

    Answer.create(req.body)
    .then((result) => {
        // console.log(staff)
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(result);
    },(err) => next(err))
    .catch((err) => next(err));
  });

  router.route('/result/:ID')
  .get((req,res,next) => {
    Answer.find({subjectId:req.params.ID})
    .populate('user')
    .then((result) => {
      console.log(result)
      res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json(result);
  },(err) => next(err))
  .catch((err) => next(err));
  });

  router.route('/attempt')
  .get( (req,res,next) => {
      Attempt.find({subject:req.query.id})
    .populate('user')
    .populate('subject')
    .then((result) => {
      console.log('kejlrw')
      // for(var i=0;i<result.length;i++){
      // console.log(result[i]['attempt']['0'])
      // }
      res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json(result);
  },(err) => next(err))
  .catch((err) => next(err));  
  })
  
router.route('/attempt/:id')
.get( authenticate.verifyUser,(req,res,next) => {
  
  Attempt.find({user:req.user._id,subject:req.params.id})
  .populate('user')
  .populate('subject')

  .then((result) => {
    console.log('staff')
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json(result);
},(err) => next(err))
.catch((err) => next(err));

})
.post(authenticate.verifyUser,(req,res,next) => {
  req.body.user = req.user._id
  // req.body.subject = req.query.subject
  console.log(req.body)
  Attempt.create(req.body)
  .then((result) => {
    // console.log(staff)
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json(result);
},(err) => next(err))
.catch((err) => next(err));

});
router.route('/attempt/:Id')
.get((req,res,next) =>{
  var temp=[]
  console.log(req.query.subject)
  Attempt.find({subject:req.query.subject})
  .populate('user')
  .populate('subject')
  .then((result) => {
    // console.log('kejlrw')
    for(var i=0;i<result.length;i++){
      if(result[i]['attempt'][req.params.Id]) {
      temp.push({attempt:result[i]['attempt'][req.params.Id],user:result[i]['user'],subject:result[i]['subject']})
    }
  }
    // console.log(temp)

    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json(temp);
},(err) => next(err))
.catch((err) => next(err));
});


router.route('/:examId')
.get((req,res,next) => {
  admin.findById(req.params.examId)
  .then((exam) => {
    console.log(exam)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(exam);
}, (err) => next(err))
.catch((err) => next(err));
});

var random = [];
  var start = []; 
  for (var i=0 ; i< 10;i++)
  {
    start.push(i);
  }
  // console.log(a);
  for (var a = start, i = start.length; i--; ) { 
      random.push(a.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
      console.log(random);
  }

module.exports = router;
