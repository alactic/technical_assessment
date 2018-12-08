import {
    Controller, Get, HttpStatus, Req, Response, Request, HttpException, Post, Param,
    ParseIntPipe, Body, Put, Delete,
} from '@nestjs/common';
import {UserService} from '../services/user.service';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {messages} from '../config/messages.conf';
import {RestfulRes} from '../response/restful.res';
import {UserEnum} from '../enums/user.enum';
import {UserReq} from '../requests/user.req';
import {BulkUserReq} from '../requests/user.bulk';
import * as json2csv from 'json2csv';
import {AuthReq} from "../requests/auth.req";
import {ResetPassword} from "../requests/reset.password.req";
import {ChangePasswordReq} from "../requests/change.password.req";

@ApiUseTags('users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    /**
     * This is used to signup a new user
     * @param res
     * @param req
     * @param user
     * @returns {Promise<void>}
     */
    @Post()
    async post(@Response() res, @Request() req, @Body() user: UserReq) {
        this.userService.create(req, user).then(response => {
            res.send(response);
        }).catch(error => {
            res.status(400).send(error);
        });
    }

}
