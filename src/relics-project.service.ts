import { Injectable } from '@nestjs/common';

@Injectable()
export class RelicProjectService {
  getHello(): string {
    return 'Hello World!';
  }
}
