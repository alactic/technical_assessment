
import {forwardRef, Module} from '@nestjs/common';
import {SharedModule} from "./shared.module";
import {fleetRepo, userRepo} from "../repos/models.repository";
import {UserService} from "../services/user.service";
import {UserController} from "../controllers/user.controller";
import {FleetController} from "../controllers/fleet.controller";
import {FleetService} from "../services/fleet.services";

@Module({
    imports: [forwardRef(() => SharedModule)],
    controllers: [UserController, FleetController],
    components: [UserService, FleetService, ...userRepo, ...fleetRepo],
    exports: [UserService, FleetService, ...userRepo, ...fleetRepo],
})
export class UserModule {}