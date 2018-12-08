import {FileStorage} from './file_storage';
import {APP_ENV} from '../config/app.config';

export class Session extends FileStorage {
    static redis;

    constructor() {
        super();
    }

}