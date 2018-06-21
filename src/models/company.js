const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const validator = require('validator');

/*============================================================================
// Company schema.
============================================================================*/
var CompanySchema = new mongoose.Schema ({
	emailAddress: {
		type: String, 
		required: true, 
		unique: true, 
		validate: {
			isAsync: false,
			validator: validator.isEmail, 
				message: 'Not a valid email.'
		}
	},
	companyName: {
		type: String,
		required: true,
		unique: false,
		minlength: 4,
		maxlength: 20
	},
	password: {
		type: String, 
		required: true,
		minlength: 5,
		maxlength: 15
	},
	campaigns: [{
		campaignName: {
			type: String,
			unique: true
		}
	}]
})

/*============================================================================
// Authenticate input against database documents. First the email will be
// matched with an entry in the database. Then that company's password will be 
// matched. A reverse bcrypt is required since passwords are stored in hash 
// format.
============================================================================*/
CompanySchema.statics.authenticate = function(emailAddress, password, callback) {
	Company.findOne({ emailAddress: emailAddress })
		.exec(function (error, company) {
		  if (error) {
				return callback(error);
		  } else if ( !company ) {
				var err = new Error('Email not found.');
				err.status = 401;
				return callback(err);
		  }

		  bcrypt.compare(password, company.password , function(error, result) {
			if (result === true) {
			  return callback(null, company);
			} else {
			  return callback();
			}
		  })
		});
  }

/*============================================================================
// Hash password before saving to database
============================================================================*/
CompanySchema.pre('save', function(next) {
	var company = this;
	bcrypt.hash(company.password, 10, function(err, hash) {
		if (err) {
		return next(err);
		}
		company.password = hash;
		next();
	})
});

var Company = mongoose.model('Company', CompanySchema);

module.exports = { Company };