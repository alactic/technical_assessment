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

}
