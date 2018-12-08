
import {forwardRef, Module} from '@nestjs/common';
import {SharedModule} from './shared.module';
import {productRepo} from '../repos/models.repository';
import {ProductController} from '../controllers/products.controller';
import {ProductsService} from '../services/products.service';

@Module({
    imports: [forwardRef(() => SharedModule)],
    controllers: [],
    components: [],
    exports: [],
})
export class ProductModule {}