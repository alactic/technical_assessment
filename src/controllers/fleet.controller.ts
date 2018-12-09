import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Request, Response} from '@nestjs/common';
import {UserService} from '../services/fleet.service';
import {ApiUseTags} from '@nestjs/swagger';
import {messages} from '../config/messages.conf';
import {RestfulRes} from '../response/restful.res';
import {FleetReq, UserReq} from '../requests/fleet.req';
import {BulkUserReq} from '../requests/fleet.bulk';
import {AuthReq} from '../requests/auth.req';
import {ResetPassword} from '../requests/reset.password.req';
import {ChangePasswordReq} from '../requests/change.password.req';
import {FleetService} from "../services/fleet.services";

@ApiUseTags('fleets')
@Controller('fleets')
export class FleetController {
    constructor(private fleetService: FleetService) {
    }

    /**
     * This is used to create a new fleet
     * @param res
     * @param req
     * @param fleet
     * @returns {Promise<void>}
     */
    @Post()
    async post(@Response() res, @Request() req, @Body() fleet: FleetReq) {
        const data = await this.fleetService.create(req, fleet);
        // return data;
        // Please pay attention to messages to be returned and make sure right messages are returned
        return data ? RestfulRes.success(res, messages.users.created, data) : RestfulRes.error(res, messages.operationFailed);
    }

    /**
     * This is used to fetch all fleets
     * @param res
     * @param request
     * @returns {Promise<void>}
     */
    @Get()
    async findAll(@Response() res, @Request() request) {
        const data = await this.fleetService.findAll(request);
        return data ? RestfulRes.success(res, messages.users.list.success, data) : RestfulRes.error(res, messages.users.list.failed);
    }

    /**
     * This is used to Update fleet
     * @param res
     * @param req
     * @param id
     * @param fleet_reg
     * @returns {Promise<void>}
     */
    @Put(':id')
    async update(@Response() res, @Request() req, @Param('id', new ParseIntPipe()) id: number, @Body() fleet_reg: FleetReq) {
        const data = await this.fleetService.update(fleet_reg, req);
        return data ? RestfulRes.success(res, messages.users.updated, data) : RestfulRes.error(res, messages.operationFailed);
    }

    /**
     * This is used to fetch a fleet
     * @param res
     * @param id
     * @returns {Promise<void>}
     */
    @Get(':id')
    async findUserById(@Response() res, @Param('id', new ParseIntPipe()) id: number) {
        const data = await this.fleetService.getfleetById(id);
        return data ? RestfulRes.success(res, messages.users.one.success, data) : RestfulRes.error(res, messages.users.one.failed);
    }

    /**
     * This is used to delete a fleet
     * @param res
     * @param req
     * @param id
     * @returns {Promise<void>}
     */
    @Delete(':id')
    async removeUser(@Response() res, @Request() req, @Param('id', new ParseIntPipe()) id: number) {
        const data = await this.fleetService.remove(id, req);
        return data ? RestfulRes.success(res, messages.deleteSuccess, data) : RestfulRes.error(res, messages.operationFailed);
    }
}
