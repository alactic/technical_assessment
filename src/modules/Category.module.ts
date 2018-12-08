import {forwardRef, Module} from '@nestjs/common';
import {SharedModule} from './shared.module';
import {
    aboutusRepo, categoryRepo, contactusRepo, gallaryRepo, groupRepo, pagesRepo,
    quoteRepo, serviceRepo
} from '../repos/models.repository';
import {CategoryController} from '../controllers/category.controller';
import {CategoryService} from '../services/category.service';
import {GroupController} from '../controllers/group.controller';
import {GroupsService} from '../services/groups.services';
import {PagesService} from '../services/pages.service';
import {PageController} from '../controllers/page.controller';
import {GallaryController} from '../controllers/gallary.controller';
import {GallaryService} from '../services/gallary.service';
import {QuoteService} from "../services/quote.service";
import {QuoteController} from "../controllers/quote.controller";
import {AboutService} from "../services/aboutus.services";
import {AboutController} from "../controllers/about.controller";
import {ContactController} from "../controllers/contact.controller";
import {ContactService} from "../services/contactus.services";
import {ServiceController} from "../controllers/service.controller";
import {ServiceService} from "../services/service.services";

@Module({
    imports: [forwardRef(() => SharedModule)],
    controllers: [],
    components: [],
    exports: [],
})
export class CategoryModule {
}