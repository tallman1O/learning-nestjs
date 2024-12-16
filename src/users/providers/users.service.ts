import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/getUsersParam.dto';
import { AuthService } from 'src/auth/providers/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      {
        firstName: 'Mehul',
        email: 'mehul@gmail.com',
      },
      {
        firstName: 'Uttam',
        email: 'uttam@gmail.com',
      },
      {
        firstName: 'Savio',
        email: 'savio@gmail.com',
      },
    ];
  }

  //Find a User by id

  public findOneById(id: string) {
    return {
      id: 123,
      firstName: 'Mehul',
      email: 'mehul@gmail.com',
    };
  }
}
