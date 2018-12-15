import {BadRequestException, Inject} from "@nestjs/common";
import {User} from "../models/user";
import {Model} from "mongoose";
import {catchErrors, getNextSequenceValue} from "../utils/utils";
import {compare, genSalt, hash} from "bcryptjs";
import {messages} from "../config/messages.conf";
import {modelCounter} from "../config/constants.conf";
import {Counter} from "../models/counter";
import {jwt} from "../utils/jwt";
import {CategoryReq} from "../requests/user.req";

export class UserService {
    constructor(@Inject('UserRepo') private readonly userRepo: Model<User>,
                @Inject('CounterRepo') private readonly counterRepo: Model<Counter>) {
    }

    /**
     * This is used to create a user
     * @param user
     * @param type
     * @param req
     * @returns {Promise<void>}
     */
    async create(req, user) {
        const emailExist = await this.userRepo.findOne({email: user['email']});
        const phoneExist = await this.userRepo.findOne({phone_no: user['phone_no']});
        if (emailExist) {
            throw new BadRequestException(messages.emailExist);
        } else if (phoneExist) {
            throw new BadRequestException(messages.phoneExist);
        }
        const response = {
            user_details: [],
            token: '',
        };
        const payload = {email: user['email'], _id: user['_id']};
        user['_id'] = await getNextSequenceValue(this.counterRepo, modelCounter.user);
        response['user_details'] = await this.userRepo.create(user);
        response['token'] = jwt.sign(payload);

        return response;
    }

    /**
     * getting all the users
     * @param req
     * @returns {Promise<any>}
     */
    async findAll(req) {
        return await this.userRepo.find();
    }


    /**
     * This is used to Update a user
     * @param user
     * @param type
     * @param req
     * @returns {Promise<T>}
     */
    async update(user) {
        const data = await this.userRepo.update({_id: user.id}, {$set: user});
        if (!data['nModified']) {
            throw new BadRequestException(messages.unable);
        }
        return user;
    }

    /**
     * This is used to get user by its id
     * @param id
     * @param type
     * @returns {Promise<T>}
     */
    async getUserById(id: number) {
        try {
            return await this.userRepo.findOne({_id: id});
        } catch (e) {
            throw new BadRequestException(catchErrors.formatError(e));
        }
    }

    /**
     * This is used to delete a user
     * @param id
     * @param req
     * @returns {Promise<Account>}
     */
    public async remove(id, req?) {
        const data = await this.userRepo.remove({_id: id});
        if (data['ok'] !== 1) {
            throw new BadRequestException(messages.failedToDelete);
        }
        return true;
    }

    async getUserByCategory(category: CategoryReq) {
        try {
            return await this.userRepo.find({category});
        } catch (e) {
            throw new BadRequestException(catchErrors.formatError(e));
        }
    }
}
