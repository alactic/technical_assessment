import {ENV} from '../env';
import {HttpStatus} from '@nestjs/common';

export const APP_ENV = ENV.current();
export const PORT = (APP_ENV === 'production') ? 4001 : (APP_ENV === 'test') ? 4002 : 4300;
console.log('Port=', PORT);
export const JWT_KEY = 'e92cdb34-dc0d-4873-99fc-e30dbac4e6d2-136f66f4-55e6-4d2e-adfa-0bd6c98081e1';
export const DATA_POINT_RATINGS = {
    percent: [0, 12.5, 25, 37.5, 50],
    valued: [1.2, 1.4, 1.6, 1.8, 2.0],
};
export const scores = [1, 2, 3, 4, 5];
export const SEED_LENGTH = 30;
export const DATA_POINT_RATINGS_2 = {
    percent: [
        {score: 1, value: 0},
        {score: 2, value: 12.5},
        {score: 3, value: 25},
        {score: 4, value: 37.5},
        {score: 5, value: 50},
    ],
    valued: [
        {score: 1, value: 1.2},
        {score: 2, value: 1.4},
        {score: 3, value: 1.6},
        {score: 4, value: 1.8},
        {score: 5, value: 2.0},
    ],
};

export const WEB_URL = {
    prod: {
        site: 'http://cba.upltest.com',
    },
    dev: {
        site: 'http://cba.upltest.com',
    },
    test: {
        site: 'http://cba.upltest.com',
    },
};
export const APP_ERROR_CODES = [
    HttpStatus.OK, HttpStatus.BAD_REQUEST, HttpStatus.NOT_FOUND,
    HttpStatus.UNAUTHORIZED, HttpStatus.NOT_ACCEPTABLE, HttpStatus.ACCEPTED,
    HttpStatus.CREATED, HttpStatus.FORBIDDEN,
];

export const CLOUDINARY_PASS = {
    cloud_name: 'dthjqdh6a',
    api_key: '159955541858565',
    api_secret: '8tQj3ijnClFkUHxwi-dN8OO-TPk',
};
