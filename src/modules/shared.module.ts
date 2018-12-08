import {forwardRef, Module} from '@nestjs/common';
import {HttpExceptionFilter} from '../shared/filters/http.exception.filter';
import {DbModule} from './db.module';
import {UserModule} from './user.module';
import {counterRepo, loginInfoRepo} from '../repos/models.repository';
import {DecodeEncryptedRequestInterceptor} from '../shared/interceptors/decode.encrypted.request.interceptor';
import {HttpModule} from '@nestjs/common/http';

@Module({
    imports: [
        DbModule,
        HttpModule,
        forwardRef(() => UserModule),
    ],
    components: [
        ...counterRepo,
        HttpExceptionFilter,
        DecodeEncryptedRequestInterceptor,
    ],
    exports: [
        ...counterRepo,
        HttpExceptionFilter,
        DecodeEncryptedRequestInterceptor,
        DbModule,
    ],
    controllers: [],
})
export class SharedModule {

}