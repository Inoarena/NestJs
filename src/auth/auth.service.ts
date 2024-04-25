import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { AUTHDTO } from 'src/DTO/auth.dto';
import { AUTHRESPONSEDTO } from 'src/DTO/authResponse.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    private jwtExpirationSeconds:number
    constructor(private readonly jwtService:JwtService,private readonly userService:UsersService,private readonly configService:ConfigService){
        this.jwtExpirationSeconds=+configService.get<number>('JWT_EXPIRATION_TIME')
    }
    login(data:AUTHDTO):AUTHRESPONSEDTO{
        const user=this.userService.findByUsername(data.username)
        if(!user || !compareSync(data.password,user.password)){
            throw new UnauthorizedException(``)
        }
        //o sub e o id
        const payload={sub:user.id,username:user.username}
        const token=this.jwtService.sign(payload)
        return {token,expiresIn:this.jwtExpirationSeconds}
    }
}
