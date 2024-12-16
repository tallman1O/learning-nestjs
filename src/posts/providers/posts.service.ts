import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(
    //Injectting Users Service

    private readonly usersService: UsersService,
  ) {}
  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    console.log(user);

    //Users Service
    return [
      { user: user, title: 'Test Title 1', content: 'Test Content 1' },
      { user: user, title: 'Test Title 2', content: 'Test Content 2' },
    ];
  }
}
