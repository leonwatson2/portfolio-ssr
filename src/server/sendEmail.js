import nodeMailer from 'nodemailer'

/**
 * Enviornment Variables needed
 * AUTH_EMAIL 
 * AUTH_PASSWORD
 * CONTACT_EMAIL
 * @param {name, email, reason} {string, string, string} 
 */
export function sendEmail({name, email, reason}){

    let transporter = nodeMailer.createTransport({
        host: 'just137.justhost.com',
        port: 26,
        secure: false,
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASSWORD
        }
    });

    let mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.CONTACT_EMAIL,
        subject: "Work Enquiry",
        text: reason,
        html: `<p>${reason}</p>`
    };

    return new Promise((res, rej) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                rej(error);
            }else{
                res(true)
                res.render('index');
            }
        });
    })
}
