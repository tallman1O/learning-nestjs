import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/getUsersParam.dto';
import { AuthService } from 'src/auth/providers/auth/auth.service';

/**
 * Class to connect to Users Table in the Database
 */
@Injectable()
export class UsersService {
  constructor(
    /**
     * Injecting AuthService
     */
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * Function to get all users
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    console.log(getUsersParamDto);
    console.log(limit);
    console.log(page);
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

  /**
   * Function to find a user by id
   *
   */
  public findOneById(id: string) {
    console.log(id);
    return {
      id: 123,
      firstName: 'Mehul',
      email: 'mehul@gmail.com',
    };
  }
}
