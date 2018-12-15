import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    Request,
    Response
} from '@nestjs/common';
import {UserService} from '../services/user.service';
import {ApiImplicitQuery, ApiUseTags} from '@nestjs/swagger';
import {messages} from '../config/messages.conf';
import {RestfulRes} from '../response/restful.res';
import {CategoryReq, UserReq} from '../requests/user.req';
import {BulkUserReq} from '../requests/user.bulk';
import {AuthReq} from '../requests/auth.req';
import {ResetPassword} from '../requests/reset.password.req';
import {ChangePasswordReq} from '../requests/change.password.req';
import {jwt} from '../utils/jwt';

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
        return data ? RestfulRes.success(res, messages.users.list.success, data) : RestfulRes.error(res, messages.users.list.failed);
    }

    /**
     * This is used to fetch a user by category
     * @param res
     * @param id
     * @returns {Promise<void>}
     */
    @ApiImplicitQuery({
        name: 'category',
        description: 'category of the user',
        required: false,
    })
    @Get('category')
    async findUserByCategory(@Request() req, @Response() res, @Query('category') category) {
        if (!category || category === '') {
            throw new BadRequestException(messages.emptycategory);
        }
        const data = await this.userService.getUserByCategory(category);
        return data ? RestfulRes.success(res, messages.users.one.success, data) : RestfulRes.error(res, messages.users.one.failed);
    }

    /**
     * This is used to Update user
     * @param res
     * @param req
     * @param id
     * @param user_reg
     * @returns {Promise<void>}
     */
    @Put(':id')
    async update(@Response() res, @Request() req, @Param('id', new ParseIntPipe()) id: number, @Body() user_reg: UserReq) {
        const data = await this.userService.update(user_reg, req);
        return data ? RestfulRes.success(res, messages.users.updated, data) : RestfulRes.error(res, messages.operationFailed);
    }

    /**
     * This is used to fetch a user
     * @param res
     * @param id
     * @returns {Promise<void>}
     */
    @Get(':id')
    async findUserById(@Request() req, @Response() res, @Param('id', new ParseIntPipe()) id: number) {
        jwt.verify(req['headers']['authorization']);
        const data = await this.userService.getUserById(id);
        return data ? RestfulRes.success(res, messages.users.one.success, data) : RestfulRes.error(res, messages.users.one.failed);
    }

    /**
     * This is used to delete a user
     * @param res
     * @param req
     * @param id
     * @returns {Promise<void>}
     */
    @Delete(':id')
    async removeUser(@Response() res, @Request() req, @Param('id', new ParseIntPipe()) id: number) {
        const data = await this.userService.remove(id, req);
        return data ? RestfulRes.success(res, messages.deleteSuccess, data) : RestfulRes.error(res, messages.operationFailed);
    }
}
