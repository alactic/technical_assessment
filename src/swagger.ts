import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';

export class Swagger {
    private static options;
    private static document;

    /**
     * Swagger configuration
     */
    public static configure() {
        Swagger.options = new DocumentBuilder()
            .setSchemes('http', 'https')
            .setTitle('VITS commerce')
            .setDescription('These are APIs documentation for vits')
            .setVersion('1.0.0')
            .addTag('app', 'These are apis pertaining to app view')
            .addTag('auth', 'This is used to authenticate a user')
            .build();
    }

    /**
     * Swagger setup initialization
     * @param {INestApplication} app
     */
    public static setup(app: INestApplication) {
        Swagger.document = SwaggerModule.createDocument(app, Swagger.options);
        SwaggerModule.setup('/api', app, Swagger.document);
    }
}