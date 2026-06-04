import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class UserController {
  @GrpcMethod('UserService', 'GetUser')
  getUser(data: { id: number }) {
    return {
      id: data.id,
      name: 'Hamed Parsa',
      email: 'hamed@example.com',
    };
  }
}
