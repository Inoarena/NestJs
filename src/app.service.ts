import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sms(){
    return 'Feliz aniversário querido'
  }
}
