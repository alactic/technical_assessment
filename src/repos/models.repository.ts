import UserSchema from '../schemas/user';
import LoginInfoSchema from '../schemas/login_info';
import {Connection} from 'mongoose';
import CounterSchema from "../schemas/counters";
import FleetSchema from "../schemas/fleet";

UserSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

export const userRepo = [
    {
        provide: 'UserRepo',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['DbConnectionToken'],
    },
];

export const fleetRepo = [
    {
        provide: 'FleetRepo',
        useFactory: (connection: Connection) => connection.model('Fleet', FleetSchema),
        inject: ['DbConnectionToken'],
    },
];

export const counterRepo = [
    {
        provide: 'CounterRepo',
        useFactory: (connection: Connection) => connection.model('Counter', CounterSchema),
        inject: ['DbConnectionToken'],
    },
];