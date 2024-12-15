import { Controller, Get, Post } from '@nestjs/common';

//http://localhost:3000/users

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUser() {
    return 'You sent a post request to users endpoint';
  }
}
