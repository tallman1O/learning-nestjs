import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  public login(email: string, password: string, id: string) {
    // Check user exists database
    //login
    //token
    const user = this.userService.findOneById('1234');
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
