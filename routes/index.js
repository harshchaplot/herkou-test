var express = require('express');
var router = express.Router();
var users = require('../routes/users').users
const verifier = require('email-verifier');
const nodemailer = require('nodemailer');
const crypto = require('crypto-js');
/* GET home page. */

module.exports = router;


