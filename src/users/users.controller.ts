import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { USERDTO } from 'src/DTO/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    @Post()
    createUser(@Body() userData:USERDTO){
        return this.userService.createUser(userData)
    }
}
