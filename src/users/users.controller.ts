import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('/api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
