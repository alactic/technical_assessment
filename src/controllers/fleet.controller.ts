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


}
