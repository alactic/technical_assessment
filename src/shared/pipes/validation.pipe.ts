import {PipeTransform, Pipe, ArgumentMetadata, HttpStatus, BadRequestException} from '@nestjs/common';

import {validate} from 'class-validator';
import {plainToClass} from 'class-transformer';

/**
 * This is used to validate request classes using class validator
 */
@Pipe()
export class ValidatorPipe implements PipeTransform<any> {
    private errors = [];

    async transform(value, metadata: ArgumentMetadata) {
        const {metatype} = metadata;
        console.log('value=', value, 'metaData=', JSON.stringify(metadata), 'metatype=', metatype);
        if (!this.toValidate(metatype)) {
            return value;
            // throw new BadRequestException(messages.validations.req.toValidate);
        }
        const classObj = plainToClass(metatype, value);

        console.log('objectData=', classObj);
        const errors = await validate(classObj, {validationError: {target: false}});
        console.log('errors=', errors);
        if (errors.length > 0) {
            this.formatError(errors);
            throw new BadRequestException(this.errors);
        }
        return value;
    }

    /**
     * Check if type is a class only
     * @param {any} metatype
     * @returns {boolean}
     */
    private toValidate(metatype = null): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => type === metatype);
    }

    /**
     * This is used to format validation
     * @param errors
     */
    private formatError(errors) {
        this.errors = [];
        this.errorPusher(errors);
        return this.errors;
    }

    /**
     * Error pusher settings
     * @param errors
     */
    private errorPusher(errors) {
        let obj = {};
        errors.forEach((error, i) => {
            Object.entries(error.constraints).forEach(([key, value]) => {
                obj[error.property] = value;
                this.errors.push(obj);
                obj = {};
            });
            if (error.children && error.children.length > 0) {
                this.errorPusher(error.children);
            }
        });
    }
}