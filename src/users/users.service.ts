import { Injectable } from '@nestjs/common';
import { USERDTO } from 'src/DTO/user.dto';
import { v4 as uuid } from 'uuid';
import { hashSync } from 'bcrypt';
@Injectable()
export class UsersService {
    private readonly users:USERDTO[]=[]
    createUser(userData:USERDTO){
        userData.id=uuid()
        userData.password=hashSync(userData.password,10)
        this.users.push(userData)
        return this.users
    }

    findByUsername(username:string):USERDTO | null{
        return this.users.find(user=>user.username===username)
    }
}
