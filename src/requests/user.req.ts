import {IsEmail, IsString, IsDefined, MinLength} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class UserReq {
    @ApiModelProperty({description: 'id of the user'})
    @IsDefined()
    id: number;

    @ApiModelProperty({description: 'Phone number of an account'})
    @IsDefined()
    @MinLength(11)
    phone_no: string;

    @ApiModelProperty({description: 'First Name'})
    @MinLength(3)
    @IsDefined()
    @IsString()
    first_name: string;

    @ApiModelProperty({description: 'Last Name'})
    @MinLength(3)
    @IsDefined()
    @IsString()
    last_name: string;

    @ApiModelProperty({description: 'Email of an account'})
    @IsDefined()
    @IsEmail()
    email: string;

    @ApiModelProperty({description: 'Address of the user'})
    @IsDefined()
    address: string;

    @ApiModelProperty({description: 'category of user'})
    @IsDefined()
    category: string;

}
