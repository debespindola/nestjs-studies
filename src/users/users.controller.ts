import { Controller, Get, Param } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: User['id']): User {
    return this.usersService.getUser(id);
  }
}
