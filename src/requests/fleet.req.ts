import {IsEmail, IsString, IsDefined, MinLength, IsOptional} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class FleetReq {
    @ApiModelProperty({description: 'id of the fleet'})
    @IsOptional()
    id: number;

    @ApiModelProperty({description: 'Name of fleet'})
    @IsDefined()
    @IsString()
    name: string;

    @ApiModelProperty({description: 'Plate number of the fleet'})
    @IsDefined()
    @IsString()
    plate_number: string;

    @ApiModelProperty({description: 'category of user'})
    @IsDefined()
    category: string;

}
