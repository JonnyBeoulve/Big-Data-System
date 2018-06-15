const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {User} = require('./../models/user');

router.use(bodyParser.json());

/*============================================================================
// When the user first arrives at the website a check will be made to see
// if the user already has a session (logged in previously with active
// cookie).
============================================================================*/
router.get('/checksession', function(req, res, next) {
	if (!req.session.userId) {
		res.send(false);
	} else { 
		res.send(true);
	}
})

/*============================================================================
// Upon submitting a registration request, this will post the user's email 
// address and password to the Mongo database.
============================================================================*/
router.post('/register', function(req, res, next) {
	var user = {
		emailAddress: req.body.emailAddress,
		password: req.body.password,
	};

	User.create(user, (err, user) => {
		if (err) {
			res.status(400);
			return next(err);
		} else {
			res.location('/')
			.status(201).json();
		}
	});
})

/*============================================================================
// Upon entering signin information, a user's credentials will be verified
// before the client state is set to logged in.
============================================================================*/
router.post('/signin', function(req, res, next) {
	if (req.body.emailAddress && req.body.password) {
	  User.authenticate(req.body.emailAddress, req.body.password, function (error, user) {
			if (error || !user) {
		  	var err = new Error('Wrong email or password.');
		  	err.status = 401;
		  	return next(err);
		} else {
			req.session.userId = user._id;
			res.location('/').status(201).json();
		}
	  });
	} else {
			var err = new Error('Email and password are required.');
			err.status = 401;
			return next(err);
	};
})

module.exports = router;