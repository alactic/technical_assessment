import {ENV} from '../env';
import {HttpStatus} from '@nestjs/common';

export const APP_ENV = ENV.current();
export const PORT = (APP_ENV === 'production') ? 4001 : (APP_ENV === 'test') ? 4002 : 4300;
console.log('Port=', PORT);
export const JWT_KEY = 'e92cdb34-dc0d-4873-99fc-e30dbac4e6d2-136f66f4-55e6-4d2e-adfa-0bd6c98081e1';
export const SEED_LENGTH = 30;

export const WEB_URL = {
    prod: {
        site: '',
    },
    dev: {
        site: '',
    },
    test: {
        site: '',
    },
};

export const CLOUDINARY_PASS = {
    cloud_name: 'dthjqdh6a',
    api_key: '159955541858565',
    api_secret: '8tQj3ijnClFkUHxwi-dN8OO-TPk',
};
