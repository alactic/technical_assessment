import {Document} from 'mongoose';

export interface Fleet extends Document {
    readonly name: string;
    readonly plate_number: string;
    readonly category: string;
}