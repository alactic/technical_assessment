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
        const data = await this.userService.create(req, user);
        // return data;
        // Please pay attention to messages to be returned and make sure right messages are returned
        return data ? RestfulRes.success(res, messages.users.created, data) : RestfulRes.error(res, messages.operationFailed);
    }

    /**
     * This is used to fetch all users
     * @param res
     * @param request
     * @returns {Promise<void>}
     */
    @Get()
    async findAll(@Response() res, @Request() request) {
        const data = await this.userService.findAll(request);
        // return data;
        return data ? RestfulRes.success(res, messages.users.list.success, data) : RestfulRes.error(res, messages.users.list.failed);
    }

}
