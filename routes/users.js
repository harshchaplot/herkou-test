var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');
var authenticate = require('../authenticate')
router.use(bodyParser.json());

var Staff = require('../models/staff');
var currentLoggedin = require('../models/currentloggedinuser')
// var currentuserlogin = {}
var os = require('os');
const { route } = require('.');
var ifaces = os.networkInterfaces();
/* GET users listing. */
var admin = require('../models/admin')
const verifier = require('email-verifier');
const nodemailer = require('nodemailer');
const crypto = require('crypto-js');
const { parse } = require('path');
// var cors  = require('./cors');

var flag = true
let rand,mailOptions,host,link;
let users = {};
exports.users = users

	String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}


// authenticate.verifyUser,
router.get('/',  function(req, res, next) {
  
  User.find({})
  .then((users) => {
    // console.log(users);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({users: users});
  }, (err) => next(msg))
  .catch((err) => console.log(err));
});

router.get('/byId',authenticate.verifyUser, (req,res) => {
  User.findById(req.user._id)
  .then((user) => {
    // console.log(users);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({user: user});
  }, (err) => next(msg))
  .catch((err) => console.log(err));
});

router.get('/verify',(req,res,next)=>{ 
	console.log('Redirect successful');
	// const id = req.query.id;
	console.log("id "+req.query.id);
	let iid = (req.query.id).replaceAll(' ','+');
  try{let plaintext = (crypto.AES.decrypt(iid,"message")).toString(crypto.enc.Utf8);
  console.log('abcd',plaintext)
  
	if(plaintext==''){
		return res.redirect('/');
	}
	// else if(!users[plaintext]){
		// res.send('<h1>Email verified</h1>');
    // console.log("Plaintext is "+plaintext);
    User.find({username:plaintext})
    .then((user) => {
      console.log(user)
      if(user[0]['verified'])
      {
        res.send('<h1>Email already verified</h1>');
	      return res.end();

      }
      else {
        User.findOneAndUpdate({username:plaintext},{$set:{verified:true}})
        .then((user) => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json');
          res.json('Account Verified successfully')
		      return res.end();

        })
      }
    })
		// users[plaintext] = true;
		// console.log(users);
	// }
	// else{
		// res.send('<h1>Email already verified</h1>');
		// return res.end();
	}
	catch(err){
		return res.redirect('/');
	}
});

router.post('/signup', (req, res, next) => {
  if(req.body.emailid) {
    const email = req.body.emailid;
        console.log(email)
        let verify = new verifier("at_EEHvApdOPC6RkT91LMEXOlzXKaSAR");
	      verify.verify(email,(err,data)=>{
          console.log('start;',err,data)
        if(data.smtpCheck=='true' && data.dnsCheck=='true') {
        
        
  User.register(new User({username: req.body.username}),  
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err.message});
    }
    else {
      if(req.body.branch){
        user.branch = req.body.branch;
        console.log(user.branch);
      }
      if(req.body.semester)
        user.semester = req.body.semester;
      if(req.body.contactno)
        user.contactno = req.body.contactno;
      if(req.body.emailid){
        user.email = req.body.emailid;
        const email = req.body.emailid;
        console.log(email)
        let verify = new verifier("at_EEHvApdOPC6RkT91LMEXOlzXKaSAR");
	      verify.verify(email,(err,data)=>{
          console.log('start;',err,data)
		      // if(err){
		      // 	console.log('eerr',err);
          //   // res.send('Problem');
          //   res.statusCode = 403
          //   res.setHeader('Content-Type', 'application/json');
          //   res.json('Some Error');
          //   // return ;
		      // 	return ;
          // }
        //   else if(data) {
		    //   console.log('here',data['smtpCheck'],data.smtpCheck);
		    //   if(data.smtpCheck=='false' || data.dnsCheck=='false'){
        //     console.log('inside')
        //     res.statusCode = 403
        //     res.setHeader('Content-Type', 'application/json');
        //     res.json('Email Id is Incorrect');
        //     return ;
            
		    //   	// return;
		    //   }
        // }
        
          var smtpTransport = nodemailer.createTransport({
	        service: "Gmail",
	        auth: {
	            user: "gajjarrutvik291@gmail.com",
	            pass: "recrhkeqfikbgrjs"
	        }
		    });
		   // rand=Math.floor((Math.random() * 100) + 54);
	      	let index = email.indexOf("@");
	      	let string = email.substring(0,index);
	      	let encoded = crypto.AES.encrypt(string,"message").toString();
	          host=req.get('host');
	          link="http://"+req.get('host')+"/users/verify?id="+encoded;
	          mailOptions={
	              to : email,
	              subject : "Please confirm your Email account",
	              html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
	          }
	          console.log(mailOptions);
	          console.log("Encoded "+encoded+"string "+string+" host "+host+" link "+link);
	          console.log('smtpCheck '+data.smtpCheck+'  dnsCheck  '+data.dnsCheck);
            
            if(data.smtpCheck && data.dnsCheck){
	          	smtpTransport.sendMail(mailOptions, function(error, response){
	           if(error){
                  console.log(error);
                  res.send('<h1>Incorrect email</h1>');
	              return res.end("error");
	           }else{
	          	console.log(response);
	          	users[string] = false;
	          	console.log(users);
	          	res.send("<h1>"+email+"</h1>");
	          	return res.end();
                  // console.log("Message sent: " + response.message);
	               }
            });
            if (req.body.firstname)
            user.firstname = req.body.firstname;
          if (req.body.lastname)
            user.lastname = req.body.lastname;
          if (req.body.admin)
            user.admin = req.body.admin;
          if (req.body.student)
            user.student = req.body.student;
          if (req.body.staff)
            user.staff = req.body.staff;
          
            user.save((err, user) => {
            if (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.json({err: err.message});
              return ;
            }
            passport.authenticate('local')(req, res, () => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({status: 'Registration Successful!',msg: 'Email has been sent to your email address. Please Verify Email Address'});
            });
          });
	          }
	          else{
              res.send("<h1>Wrong credentials</h1>");
	          	return res.end();
            }
          
	      });
      }
    }
  });
}
else {
  res.statusCode = 401;
  res.setHeader('Content-Type', 'application/json');
  res.json({err: 'Enter Valid Email Address'});
}
})
}
});

router.post('/staffsignup', (req, res, next) => {
  Staff.register(new Staff({username: req.body.username}),  
    req.body.password, (err, user) => {
    if(err) {
      // res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err.message});
    }
    else {
      if(req.body.branch){
        user.branch = req.body.branch;
        console.log(user.branch);
      }
      if(req.body.contactno)
        user.contactno = req.body.contactno;
      if(req.body.emailid)
        user.email = req.body.emailid;
      if (req.body.firstname)
        user.firstname = req.body.firstname;
      if (req.body.lastname)
        user.lastname = req.body.lastname;
      if (req.body.staff)
        user.staff = req.body.staff;
      
        user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err.message});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({status: 'Registration Successful!'});
        });
      });
    }
  });
});

router.post('/login', (req, res, next) => {
  // console.log('req.body.username')
  console.log(req.headers.host)
  
  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);
    console.log(user)
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: false, status: 'Login Unsuccessful!', err: info});
    }
    req.logIn(user, (err) => {
      if (err) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!'});          
      }
      var token = authenticate.getToken({_id: req.user._id});
      
      currentLoggedin.create({ip:req.body.ip,username:req.body.username})
      .then((users) => {
        // console.log(users);
        
      }, (err) => next(msg))
      .catch((err) => console.log(err));

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'Login Successful!', token: token});
      // }
    }); 
  }) (req, res, next);
});

router.get('/logout', (req, res, next) => {
    // console.log('r')
    // console.log(authenticate.jwt._id)
    // currentuserlogin[authenticate.jwt._id]=false
    console.log(req.query.ip)
    currentLoggedin.findOneAndDelete({ip:req.query.ip,username:req.query.username})
    .then((resp)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: resp});
    })
    // res.redirect('/');
});

router.get('/checkJWTtoken',  (req, res) => {
  passport.authenticate('jwt', {session: false}, (err, user, info) => {
    if (err)
      return next(err);
    
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      return res.json({status: 'JWT invalid!', success: false, err: info});
    }
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.json({status: 'JWT valid!', success: true, user: user});

    }
  }) (req, res);
});

router.get('/ip',(req,res) => {


// Object.keys(ifaces).forEach(function (ifname) {
  // var alias = 0;

  // ifaces[ifname].forEach(function (iface) {
  //   if ('IPv4' !== iface.family || iface.internal !== false) {
  //     // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
  //     return;
  //   }

  //   if (alias >= 1) {
  //     // this single interface has multiple ipv4 addresses
  //     console.log(ifname + ':' + alias, iface.address);
  //   } else {
  //     // this interface has only one ipv4 adress
  //     console.log(ifname, iface.address);
  //     currentLoggedin.create({ip:iface.address})
  //     .then((users) => {
  //       console.log(users);
  //       // res.statusCode = 200;
  //       // res.setHeader('Content-Type', 'application/json');
  //       // res.json(users);
  //     }, (err) => next(msg))
  //     .catch((err) => console.log(err));

      currentLoggedin.find({ip:req.query.ip})
      .then((users) => {
        console.log('abcdef')
        console.log(users);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
      }, (err) => next(msg))
      .catch((err) => {console.log(err)});
    });


router.get('/activeuser',(req,res) => {
  console.log("req.query.username")
  
  console.log(req.query.username)

  currentLoggedin.find({username:req.query.username})
  .then((users) => {
    console.log('abcdef')
    console.log(users);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  }, (err) => next(msg))
  .catch((err) => {console.log(err)});
});
    // ++alias;
  // });
// });

// }

router.post('/setFlag',authenticate.verifyUser,(req,res) => {
  // console.log(req.body)
  User.findById(req.user._id)
  .then((user) => {
    if(user != null) {
      user.attempted.push(req.body);
      user.save()
      .then((users) => {
        res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({users: users});
  }, (err) => next(msg)) 
  .catch((err) => console.log(err));}
      })
    });

router.put('/setFlag/:Id', authenticate.verifyUser, (req,res) => {

  User.findById(req.user._id)
  .then((user) => {
    // console.log(user.attempted);
    var temp = user.attempted

    for(var i=0;i<temp.length;i++) {
      // console.log(user.attempted[i].subjectId);
      // console.log(req.params.Id);

    if(user != null && user.attempted[i].subjectId==(req.params.Id)) {
      user.attempted[i].completionFlag = true
      // console.log('insode');
      break
    }
    }
    user.save()
    .then((user) => {
      User.findById(req.user._id)
    .populate('attempted')

      .then((user1)=>{
        // console.log('done');
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.json(user1);
      })
    })
  })
});

  // User.update({_id:req.user._id}, {$set: req.body}, {new:true})
  // .then((users) => {
  //   // console.log(users);
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'application/json');
  //   res.json({users: users});
  // }, (err) => next(msg))
  // .catch((err) => console.log(err));
// })
router.get('/:byId',(req,res,next) => {
  console.log(req.params.byId)
  User.find({_id:req.params.byId})
  .populate('subject')
  .populate('user')
  .then((user) => {
   
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({user: user});
  }, (err) => console.log(err))
  .catch((err) => console.log(err));
});


exports.router = router;