import * as jsonwebtoken from 'jsonwebtoken';
import {JWT_KEY} from '../config/app.config';
import {NotAcceptableException, UnauthorizedException} from '@nestjs/common';
import {messages} from '../config/messages.conf';

/**
 * This is used to sign, verify and decode token
 * @type {{sign: ((data) => any); decode: ((token) => any); verify: ((token) => any)}}
 */
export const jwt = {
    sign: (data) => {
        return jsonwebtoken.sign(data, JWT_KEY);
    },
    decode: (authorization: string) => {
        try {
            if (!authorization) {
                throw new NotAcceptableException(messages.noAuthHeader);
            }
            const token = (authorization.indexOf(' ') > -1) ? authorization.split(' ')[1] : authorization;
            return jsonwebtoken.decode(token);
        }
        catch (e) {
            console.log(e.message.message);
            throw new NotAcceptableException(e.message);
        }
    },
    verify: (authorization: string) => {
        try {
            if (!authorization) {
                throw new NotAcceptableException(messages.noAuthHeader);
            }
            const token = (authorization.indexOf(' ') > -1) ? authorization.split(' ')[1] : authorization;
            return jsonwebtoken.verify(token, JWT_KEY);
        } catch (e) {
            throw new NotAcceptableException(e.message);
        }
    },
};
