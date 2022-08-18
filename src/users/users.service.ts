import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/users.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  createUser(user: CreateUserDto) {
    const newUser = {
      id: uuid(),
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUser(userId: User['id']) {
    return this.users.find((user) => user.id === userId);
  }
}
