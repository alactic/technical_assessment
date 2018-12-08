import * as mongoose from 'mongoose';
import * as mongoose_delete from 'mongoose-delete';

const FleetSchema = new mongoose.Schema({
        _id: Number,
        name: String,
        plate_number: String,
        category: {type: String, lowercase: false, trim: true},
    },
    {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}},
);
FleetSchema.plugin(mongoose_delete,  { overrideMethods: true });
FleetSchema.set('toJSON', {
    transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    },
});
export default FleetSchema;