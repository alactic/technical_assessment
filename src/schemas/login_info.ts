/*
import {
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt
} from 'sequelize-typescript';
import {LogoutEnum} from '../enums/logout.enum';
import {User} from './user';

@Table({
    modelName: 'login_infos',
    indexes: [{
        unique: true,
        fields: ['user_id', 'ref_token'],
    }],
    updatedAt: false,
    defaultScope: {
        attributes: {exclude: ['user_id']},
    },
})
export class LoginInfo extends Model<LoginInfo> {

    @ForeignKey(() => User)
    @Column({unique: false, type: DataType.INTEGER, references: {model: 'users', key: 'id'}})
    user_id: number;

    @Column
    ip_address: string;

    @Column({unique: false, type: DataType.ENUM, values: [LogoutEnum.USER, LogoutEnum.SYSTEM, LogoutEnum.SYSADMIN]})
    status: string;

    @Column
    ref_token: string;

    @Column
    browser_agent: string;

    @CreatedAt
    last_login: Date;

    @BelongsTo(() => User)
    user: User;

}
*/

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const LoginInfoSchema = new Schema({
    _id: Number,
    user: Schema.Types.ObjectId,
    status: {type: String, lowercase: false, trim: true},
    ip_address: String,
    ref_token: String,
    browser_agent: String,
    last_login: {type: Date, default: Date.now},
});
LoginInfoSchema.set('toJSON', {
    transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
});
export default LoginInfoSchema;