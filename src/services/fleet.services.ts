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


    /**
     * This is used to Update a fleet
     * @param fleet
     * @param type
     * @param req
     * @returns {Promise<T>}
     */
    async update(fleet) {
        const data = await this.fleetRepo.update({_id: fleet.id}, {$set: fleet});
        if (!data['nModified']) {
            throw new BadRequestException(messages.unable);
        }
        return fleet;
    }

    /**
     * This is used to get fleet by its id
     * @param id
     * @param type
     * @returns {Promise<T>}
     */
    async getfleetById(id: number) {
        try {
            return await this.fleetRepo.findOne({_id: id});
        } catch (e) {
            throw new BadRequestException(catchErrors.formatError(e));
        }
    }

    /**
     * This is used to delete a fleet
     * @param id
     * @param req
     * @returns {Promise<Account>}
     */
    public async remove(id, req?) {
        const data = await this.fleetRepo.remove({_id: id});
        if (data['ok'] !== 1) {
            throw new BadRequestException(messages.failedToDelete);
        }
        return true;
    }

    async getUserByCategory(category: any) {
        try {
            return await this.fleetRepo.find({category});
        } catch (e) {
            throw new BadRequestException(catchErrors.formatError(e));
        }
    }
}
