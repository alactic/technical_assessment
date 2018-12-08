import {BadRequestException, Inject} from "@nestjs/common";
import {User} from "../models/user";
import {Model} from "mongoose";
import {catchErrors, getNextSequenceValue} from "../utils/utils";
import {compare, genSalt, hash} from "bcryptjs";
import {messages} from "../config/messages.conf";
import {modelCounter} from "../config/constants.conf";
import {Counter} from "../models/counter";

export class UserService {
    constructor(@Inject('UserRepo') private readonly userRepo: Model<User>,
                @Inject('CounterRepo') private readonly counterRepo: Model<Counter>) {
    }

    /**
     * This is used to createOrUpdate a user either biller or consumer
     * @param user
     * @param type
     * @param req
     * @returns {Promise<void>}
     */
    async create(req, user) {
        user['_id'] = await getNextSequenceValue(this.counterRepo, modelCounter.user);
        const data = await this.userRepo.create(user);
        return data;
    }

    /**
     * getting all the users
     * @param req
     * @returns {Promise<any>}
     */
    async findAll(req) {
        return await this.userRepo.find();
    }
}
