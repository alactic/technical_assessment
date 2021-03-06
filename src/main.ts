import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as consolidate from 'consolidate';
import * as fileUpload from 'express-fileupload';
import * as path from 'path';
import {Swagger} from './swagger';
import {RolesGuard} from './shared/guards/role-guards';
import {HttpExceptionFilter} from './shared/filters/http.exception.filter';
import {ValidatorPipe} from './shared/pipes/validation.pipe';
import {ValidationModule} from './modules/validation.module';
import {Mail} from './utils/mail';
import {MailEnum} from './enums/mail.enum';
import {CLOUDINARY_PASS, PORT} from './config/app.config';
import {SharedModule} from './modules/shared.module';
import * as cloudinary from 'cloudinary';
import * as cors from 'cors';

const expressInstance = express();
expressInstance.engine('html', consolidate.swig);
expressInstance.set('views', path.join(__dirname, 'public/views'));
expressInstance.set('view engine', 'html');
expressInstance.use('/public', express.static(path.join(__dirname, 'public')));
expressInstance.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
expressInstance.use(bodyParser.json({limit: '50mb'}));
expressInstance.use(fileUpload({
    limits: {fileSize: 20 * 1024 * 1024},
}));

cloudinary.config(CLOUDINARY_PASS);

/**
 * Application bootstrap
 * @returns {Promise<void>}
 */
async function bootstrap() {
    const app = await NestFactory.create(AppModule, expressInstance, {});
    const authGuard = app.select(ValidationModule).get(RolesGuard);
    const validatorPipe = app.select(ValidationModule).get(ValidatorPipe);
    const httpExceptionFilter = app.select(SharedModule).get(HttpExceptionFilter);
    app.useGlobalPipes(validatorPipe);
    app.useGlobalGuards(authGuard);
    // app.useGlobalFilters(httpExceptionFilter);
    Mail.setEngine(MailEnum.MAILGUN);
    console.log('engine=', Mail.getEngine(), 'port=', PORT);
    app.enableCors();
    app.use(cors());

    Swagger.configure();
    Swagger.setup(app);
    await app.listen(process.env.PORT || 4900);
}

bootstrap();
