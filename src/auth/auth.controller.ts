import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AUTHDTO } from 'src/DTO/auth.dto';
import { AuthService } from './auth.service';
import { AUTHRESPONSEDTO } from 'src/DTO/authResponse.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @HttpCode((HttpStatus.OK))
    @Post('/login')
    signin(@Body() data:AUTHDTO):AUTHRESPONSEDTO{
        return this.authService.login(data)
    }
}
