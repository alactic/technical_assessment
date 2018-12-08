/*
import {databaseRepository} from '../repos/db.repository';
import * as mongoose from 'mongoose';
import UserSchema from '../schemas/user';
import RiskToolSchema from '../schemas/risk_tool';
import DataPointSchema from '../schemas/data_point';
import CategorySchema from '../schemas/category';
import CounterSchema from '../schemas/counters';
import USERS from './20180409161313-user-seed';
import {DATA_POINTS} from './20180412105261-data-point-seed';
import {CATEGORIES} from './20180412105259-category-seed';
import {RISK_TOOLS} from './20180412105260-risk-tool-seed';
import {modelCounter} from '../config/constants.conf';
import LoginInfoSchema from "../schemas/login_info";
import {SERVICES} from "./20180412105259-service-seed";
import ServiceSchema from "../schemas/service";

const connect = async () => await databaseRepository[0].useFactory();
let User = null, RiskTool = null, DataPoint = null, LoginInfo = null, Category = null, Counter = null, Service = null;

async function models() {
    await connect();
    User = mongoose.model('User', UserSchema);
    RiskTool = mongoose.model('RiskTool', RiskToolSchema);
    DataPoint = mongoose.model('DataPoint', DataPointSchema);
    Category = mongoose.model('Category', CategorySchema);
    Service = mongoose.model('Service', ServiceSchema);
    Counter = mongoose.model('Counter', CounterSchema);
    LoginInfo = mongoose.model('LoginInfo', LoginInfoSchema);
}

async function runSeeders() {
    await models();
    await User.create(USERS);
    await DataPoint.create(DATA_POINTS);
    const riskTools = RISK_TOOLS();
    await RiskTool.create(riskTools);
    CATEGORIES.forEach((category, i) => {
        riskTools.forEach((riskTool) => {
            if (riskTool.category === category._id) {
                CATEGORIES[i].risk_tools.push(riskTool._id);
            }
        });
    });
    await Category.create(CATEGORIES);
    await Service.create(SERVICES);
    await Counter.create({_id: modelCounter.user, seq: USERS.length});
    await Counter.create({_id: modelCounter.dataPoint, seq: DATA_POINTS.length});
    await Counter.create({_id: modelCounter.riskTool, seq: riskTools.length});
    await Counter.create({_id: modelCounter.category, seq: CATEGORIES.length});
    await Counter.create({_id: modelCounter.service, seq: SERVICES.length});

    console.log('Seeding successful, Thank you...');
}

async function undoCollections() {
    await models();
    await User.remove();
    await Category.remove();
    await Service.remove();
    await DataPoint.remove();
    await RiskTool.remove();
    await Counter.remove();
    await LoginInfo.remove();
    console.log('Seeders Undo successfully, Thank you...');
}

if (process.argv.toLocaleString().indexOf('--seed') > -1) {
    console.log('Running Seeders, please wait...');
    runSeeders();
} else if (process.argv.toLocaleString().indexOf('--undo') > -1) {
    console.log('Undo Seeding, please wait...');
    undoCollections();
}*/
