import {Module} from '@nestjs/common';
import {RolesGuard} from '../shared/guards/role-guards';
import {ValidatorPipe} from '../shared/pipes/validation.pipe';
import {ParseIntPipe} from '../shared/pipes/parse-int.pipe';

@Module({
    components: [RolesGuard, ValidatorPipe, ParseIntPipe],
})
export class ValidationModule {}
