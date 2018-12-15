import * as mongoose from 'mongoose';
import * as mongoose_delete from 'mongoose-delete';

const UserSchema = new mongoose.Schema({
        _id: Number,
        first_name: {type: String, trim: true},
        last_name: {type: String, trim: true},
        phone_no: {type: String, trim: true},
        email: {type: String, trim: true},
        address: {type: String, trim: true},
        category: {type: String, trim: true},
    },
    {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}},
);
UserSchema.plugin(mongoose_delete,  { overrideMethods: true });
UserSchema.set('toJSON', {
    transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
});
export default UserSchema;