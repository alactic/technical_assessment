
import {forwardRef, Module} from '@nestjs/common';
import {SharedModule} from "./shared.module";
import {userRepo} from "../repos/models.repository";
import {UserService} from "../services/user.service";
import {UserController} from "../controllers/user.controller";

@Module({
    imports: [forwardRef(() => SharedModule)],
    controllers: [UserController],
    components: [UserService, ...userRepo],
    exports: [UserService, ...userRepo],
})
export class UserModule {}