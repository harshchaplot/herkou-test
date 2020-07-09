var express = require('express');
var adminrouter = express.Router();
const bodyParser = require('body-parser');
var AdminExamSchedule = require('../models/admin');
var passport = require('passport');
var authenticate = require('../authenticate')
adminrouter.use(bodyParser.json());
var cors = require('./cors')
var shuffle = require('../config')
var Staff = require('../models/staff')
var login = require('../models/currentloggedinuser')
var app = require('../app')
var currentloggedinuser = require('../models/currentloggedinuser')
var dateTime = require('node-datetime');



adminrouter.get('/examall',authenticate.verifyUser,(req,res,next) => {
    AdminExamSchedule.find({branch:req.query.branch,semester:req.query.semester})
    .then((exams) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({exams:exams});
    })
})

adminrouter.get('/exam',authenticate.verifyUser,(req,res,next) => {
    var d = new Date();

    console.log('outside')
    console.log(d.getHours()+'.'+d.getMinutes())
    // if(authenticate.verifyAdmin){
        AdminExamSchedule.find({branch:req.query.branch,semester:parseInt(req.query.sem)})
        .then((exams) => {
            // console.log(dt);
            
            i=0;
            while(exams[i]) {
                date = new Date(exams[i]['date'])
                dt1 = date.getDate();
                console.log(exams[i]);
                // if(exams[i])
                var temp = exams[i]['completionTime'].split(':')
                // console.log(temp,d.getHours(),d.getMinutes());

                var hour = temp[0]-d.getHours()
                var min = Math.abs(temp[1]-d.getMinutes())
                console.log(hour,min);
                
                if(hour<=0 && exams[i]['duration']>min) {
                    exams[i]['duration'] = min 
                }
                else if(hour>0 && exams[i]['duration']>hour*60+min){
                    exams[i]['duration'] = hour*60+min
                }
                
                // exams[i]['duration']=exams[i][]
                // if (dt1 < 10) {
                    // dt1 = '0' + dt1;
                // }
                // var date = exams[i]['date']
                
                if(dt1==d.getDate() && !exams[i]['completed'] && ((parseInt(temp[0])-d.getHours()>0) || (parseInt(d.getMinutes()-temp[1])<0))){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({exams:[exams[i]]});
                    break
                }
                else{
                i++}
            }
            if(!exams[i]){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({msg:'No exams Available'});
            }
            // console.log('abcd');
            // console.log(exams);
            // res.statusCode = 200;
            // res.setHeader('Content-Type', 'application/json');
            // res.json({exams:exams});
        }, (err) => next(err))
        .catch((err) => next(err));
  });
adminrouter.route('/')
.options(cors.corsWithOptions ,(req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
    // var a = [0, 1, 2, 3, 4,5,6,7,8,9,10]
    // console.log(a)
    // shuffle.shuffle
    // console.log('outside')
    // console.log(a)
    // if(authenticate.verifyAdmin){
        AdminExamSchedule.find({})
        .then((exams) => {
            console.log('abcd');
            console.log(exams);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({exams:exams});
        }, (err) => next(err))
        .catch((err) => next(err));
    // }
    // else{
    // console.log(req.query.branch);
    // console.log(req.query.sem);
    // AdminExamSchedule.find({branch:req.query.branch,semester:req.query.sem})
    // .then((exams) => {
    //     console.log('abcd');
    //     console.log(exams);
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.json({exams:exams});
        
    // }, (err) => next(err))
    // .catch((err) => next(err)); 
    // }
})
// authenticate.verifyUser, authenticate.verifyAdmin,
.post(cors.corsWithOptions,(req, res, next) => {
    console.log(req.body);
    AdminExamSchedule.create(req.body)
    .then((exam) => {
        console.log('Exam Created ', exam);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(exam);
    }, (err) => next(err))
    .catch((err) => console.log(err));
})
.put((req, res, next) => {
    console.log(req.query.id);
    
    AdminExamSchedule.findByIdAndUpdate(req.query.id,{$set:{completed:true}})
    .then((exam) => {
        // console.log('Exam Created ', exam);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(exam);
    }, (err) => next(err))
    .catch((err) => console.log(err));
})
.delete(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    AdminExamSchedule.deleteMany()
    .then((msg) => {
        console.log('All AdminExamSchedule Deleted ', msg);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(msg);
    }, (err) => next(msg))
    .catch((err) => console.log(err));
});



// adminrouter.route('/:examId')
// .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
// .get(cors.cors,(req,res,next) => {
//     AdminExamSchedule.findById(req.params.examId)
//     .then((exam) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(exam);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /ExamId/'+ req.params.examId);
// })
// .put(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
//     AdminExamSchedule.findByIdAndUpdate(req.params.dishId, { $set : req.body}, {new:true} )
//     .then((exam) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(exam);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .delete(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
//       AdminExamSchedule.findByIdAndDelete(req.params.examId)
//       .then((resp) => {
//         console.log("Exam with ", req.params.examId,"gets removed succesfully");
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));

// });

adminrouter.route('/getStaff')
// .options(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin, (req, res) => { res.sendStatus(200); })
// authenticate.verifyUser,authenticate.verifyAdmin
.get((req,res,next) => {
    Staff.find({staff:false})
    .then((staffs) => {
        console.log(staffs)
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(staffs);
    },(err) => next(err))
    .catch((err) => next(err));

})
// authenticate.verifyAdminauthenticate.verifyUser,
.put(cors.cors,(req,res,next) => {
    console.log(req.body);
    console.log(req.body.params.update)
    Staff.findByIdAndUpdate(req.body.params.id, { $set : req.body.params.update}, {new:true})
    .then((staff) => {
        console.log(staff)
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(staff);
    },(err) => next(err))
    .catch((err) => next(err));
})
.delete((req,res,next) => {
    Staff.findOneAndDelete(req.query.id)
    .then((staff) => {
        console.log(staff)
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(staff);
    },(err) => next(err))
    .catch((err) => next(err));
});

// const collection = login;
// const changeStream = collection.watch();

adminrouter.route('/totalLoggedinUsers')
.get(cors.cors,(req,res,next) => {
    
    // if(req.query.number == 0) {
        login.countDocuments()
        .then((number) => {
            console.log(number)
            res.statusCode = 200
            res.setHeader('Content-Type','application/json','Connection','keep-alive');
            res.json({number:number})
        },(err) => next(err))
        .catch((err) => console.log(err));
    // }

    // else {
    // // console.log('i here')
    // changeStream.once('change', next => {
    //     // console.log('w')
    //     // console.log(next)
    //     login.countDocuments()
    //     .then((number) => {
    //         // console.log(number)
    //         res.statusCode = 200
    //         res.setHeader('Content-Type','application/json','Connection','keep-alive');
    //         res.json({number:number})
    //     },(err) => next(err))
    //     .catch((err) => console.log(err));
    //   });
    // }
});

// const collection1 = currentloggedinuser;
// const changeStream1 = collection1.watch();


adminrouter.route('/currentUsers')
.get((req,res,next) => {

    // if(req.query.number == 0) {
        currentloggedinuser.find()
        .then((users) => {
            console.log(users)
            res.statusCode = 200
            res.setHeader('Content-Type','application/json','Connection','keep-alive');
            res.json({users:users})
        },(err) => next(err))
        .catch((err) => console.log(err));
    // }
    // else {
    //     console.log('i here 2')
    //     changeStream1.once('change', next => {
    //         // console.log(next)
    //         currentloggedinuser.find()
    //         .then((number) => {
    //             console.log(number)
    //             res.statusCode = 200
    //             res.setHeader('Content-Type','application/json','Connection','keep-alive');
    //             res.json({number:number})
    //         },(err) => next(err))
    //         .catch((err) => console.log(err));
    //       });
    // }

})

module.exports = adminrouter;


