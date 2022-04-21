import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    console.log('hello NEST!!!');
    return 'Hello World!';
  }

  postHello(): string {
    console.log('hello NEST!!!');
    return 'this is a post req';
  }
  
}
