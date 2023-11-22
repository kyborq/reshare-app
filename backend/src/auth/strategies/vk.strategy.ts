import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VkStrategy {
  constructor() {
    // ...
  }

  async validate(): Promise<any> {
    // ...
  }
}
