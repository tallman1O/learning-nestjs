import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { GetUsersParamDto } from './dtos/getUsersParam.dto';
import { PatchUserDto } from './dtos/patchUser.dto';

//http://localhost:3000/users

@Controller('users')
export class UsersController {
  @Get('/:id?') //'/:id?' - id is optional. If id is not provided, it will return all users
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query() query: any,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUsersParamDto);
    console.log(query);
    console.log(limit);
    console.log(page);
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUser(
    @Body() createUserDto: CreateUserDto,
    @Body('email') email: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(createUserDto);
    console.log(email);
    console.log(headers);
    console.log(ip);
    return 'You sent a post request to users endpoint';
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
