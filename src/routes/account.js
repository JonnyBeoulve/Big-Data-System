const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Company } = require('./../models/company');

router.use(bodyParser.json());

/*============================================================================
// This will get all companies in the Mongo database. This is only for test 
// purposes.
============================================================================*/
router.get('/', function(req, res, next) {
	Company.find( {}, '', function(err, companies) {
		if (err) {
			return next(err);
		}
		res.send(companies);
	});
})

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
// Upon submitting a registration request, this will post the company's email 
// address and password to the Mongo database.
============================================================================*/
router.post('/register', function(req, res, next) {
	var company = {
		emailAddress: req.body.emailAddress,
		companyName: req.body.companyName,
		password: req.body.password,
		campaigns: [{ 
			campaignName: req.body.campaignName 
		}]
	};

	Company.create(company, (err, company) => {
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
// Upon entering login information, a user's credentials will be verified
// before the client state is set to logged in.
============================================================================*/
router.post('/login', function(req, res, next) {
	if (req.body.emailAddress && req.body.password) {
	  Company.authenticate(req.body.emailAddress, req.body.password, function (error, company) {
			if (error || !company) {
		  	var err = new Error('Wrong email or password.');
		  	err.status = 401;
		  	return next(err);
		} else {
			req.session.companyId = company._id;
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