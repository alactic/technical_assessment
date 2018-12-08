export const myMail = 'info@vitsglobal.com';

export const new_user_message = (username) => {
    return '<h2>Your Profile link</h2><br> <p>https://checkmyprofile.herokuapp.com/' + username + '</p>';
};

export const password_reset_message = (message) => {
    return '<html><body><h2>This link will be inactive after 24 hours </h2><a href="' + message + '">Click here to recover  password</a></body></html>';
};

export const quote_message = (message) => {
    return `<html><body>
              <table  style="background-color: darkgrey; color: white; font-size: 14px; padding: 5%" border="0" cellspacing="0" cellpadding="0">
                 <tr>
                 <td>Company &nbsp;&nbsp;</td>
                 <td>${message['company']}</td>
                </tr>
                 <tr>
                 <td>First Name &nbsp;&nbsp;</td>
                 <td>${message['firstName']}</td>
                </tr>
                <tr>
                 <td>Last Name &nbsp;&nbsp;</td>
                 <td>${message['lastName']}</td>
                </tr>
                <tr>
                 <td>Email &nbsp;&nbsp;</td>
                 <td>${message['email']}</td>
                </tr>
                <tr>
                 <td>Phone Number &nbsp;&nbsp;</td>
                 <td>${message['phone']}</td>
                </tr>
                <tr>
                 <td>Interest &nbsp;&nbsp;</td>
                 <td>${message['interest']}</td>
                </tr>
                <tr>
                 <td>Unit &nbsp;&nbsp;</td>
                 <td>${message['unit']}</td>
                </tr>
                <tr>
                 <td>Other Information &nbsp;&nbsp;</td>
                 <td>${message['otherInfo']}</td>
                </tr>
              </table>
            </body></html>`;
};

export const subject = 'Profile Link';

export const quote_subject = 'Quick Quote';

export const resetSubject = 'Password Reset';
