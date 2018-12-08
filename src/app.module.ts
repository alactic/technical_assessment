import {Module, NestModule, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {UserModule} from './modules/user.module';
import {CorsMiddleware} from './shared/middlewares/cors-middleware';
import {MiddlewaresConsumer} from '@nestjs/common/interfaces/middlewares';
import {SharedModule} from './modules/shared.module';
import {ValidationModule} from './modules/validation.module';
import {ProductModule} from './modules/Product.module';
import {CategoryModule} from "./modules/Category.module";

@Module({
    imports: [
        UserModule,
        SharedModule,
        ValidationModule,
        ProductModule,
        CategoryModule,
    ],
    controllers: [AppController],
    components: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(CorsMiddleware).forRoutes({path: '*', method: RequestMethod.ALL});
    }
}