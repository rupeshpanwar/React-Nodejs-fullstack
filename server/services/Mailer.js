const sendgrid = require('sendgrid');
const helper = sendgrid.helper
const keys = require('../config/keys')

class Mailer extends helper.Mail{
    constructor({ subject,recipients},content){
        super()

        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject
        this.body = new helper.Content('text/html', content)
        this.recipients = this.formatAddress(recipients)

    }
}

module.exports = Mailer