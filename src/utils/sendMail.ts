import * as nodemail from 'nodemailer';

export const sendmail = (from, to, subject, html) => {
    const transporter = nodemail.createTransport({
        host: 'vitsglobal.com',
        port: 465,
        tls: {
            rejectUnauthorized: false,
        },
        // secure: true, // true for 465, false for other ports
        auth: {
            user: 'info@vitsglobal.com',
            pass: 'W3lcome123',
        },
    });
    const mailOptions = {
        from,
        to,
        subject,
        html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};
