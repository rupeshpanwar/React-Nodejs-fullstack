const sendgrid = require('sendgrid');
const helper = sendgrid.helper
const keys = require('../config/keys')

class Mailer extends helper.Mail{
    // this.from_email = new helper.Email('no-reply@emaily.com');
}