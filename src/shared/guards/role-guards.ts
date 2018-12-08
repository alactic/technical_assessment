import {Guard, CanActivate, ExecutionContext, ForbiddenException} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {jwt} from '../../utils/jwt';
import {User} from '../../models/user';
import {messages} from '../../config/messages.conf';
import {catchErrors} from '../../utils/utils';

@Guard()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {
    }

    canActivate(req, context: ExecutionContext): boolean {
        try {
            const {parent, handler} = context;
            console.log('role guard...', this.reflector);
            const roles = this.reflector.get<string[]>('roles', handler) || this.reflector.get<string[]>('roles', parent); // handler for method & parent for controller reflection
            console.log({roles});
            if (!roles) {
                return true;
            }

            const user: User = jwt.verify(req.headers['authorization']) || {};
            console.log('user=', user);
            const hasRole = () => roles.indexOf(user.type) > -1;
            const state = user && user.type && hasRole();
            if (!state) {
                throw new ForbiddenException(messages.validations.req.apiAccess);
            } else {
                return true;
            }
        } catch (e) {
            throw new ForbiddenException(catchErrors.formatError(e));
        }
    }
}