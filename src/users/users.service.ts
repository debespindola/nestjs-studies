import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUser(userId: User['id']) {
    return this.users.find((user) => user.id === userId);
  }
}
