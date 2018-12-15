import {jwt} from "./jwt";
import {SecreytKey} from "./constant";
import {HttpException} from "@nestjs/core";
import {HttpStatus} from "@nestjs/common";
export const AuthGuard = (token) => {
    try {
        console.log('decoded :: ', token);
        const decode = jwt.verify(token, SecreytKey);
        console.log('decoded :: ', decode);
        return decode;
    } catch (e) {
        const errorMessage = 'Token error ' + (e.message || err.name);
        throw new HttpException(errorMessage, HttpStatus.FORBIDDEN);
    }
}