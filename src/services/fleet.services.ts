import {BadRequestException, Inject} from '@nestjs/common';
import {Model} from 'mongoose';
import {catchErrors, getNextSequenceValue} from '../utils/utils';
import {compare, genSalt, hash} from 'bcryptjs';
import {messages} from '../config/messages.conf';
import {modelCounter} from '../config/constants.conf';
import {Counter} from '../models/counter';
import {Fleet} from '../models/fleet';

export class FleetService {
    constructor(@Inject('FleetRepo') private readonly fleetRepo: Model<Fleet>,
                @Inject('CounterRepo') private readonly counterRepo: Model<Counter>) {
    }

    /**
     * This is used to create a fleet
     * @param fleet
     * @param type
     * @param req
     * @returns {Promise<void>}
     */
    async create(req, fleet) {
        fleet['_id'] = await getNextSequenceValue(this.counterRepo, modelCounter.fleet);
        const data = await this.fleetRepo.create(fleet);
        return data;
    }

    /**
     * getting all the fleets
     * @param req
     * @returns {Promise<any>}
     */
    async findAll(req) {
        return await this.fleetRepo.find();
    }


}
