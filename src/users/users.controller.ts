import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
} from '@nestjs/common';

//http://localhost:3000/users

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?') //'/:id?' - id is optional. If id is not provided, it will return all users
  public getUsers(
    @Param() params: any,
    @Param('id') id: any,
    @Query() query: any,
    @Query('limit') limit: any,
  ) {
    console.log(params);
    console.log(query);
    console.log(id);
    console.log(limit);
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUser(
    @Body() body: any,
    @Body('email') email: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(body);
    console.log(email);
    console.log(headers);
    console.log(ip);
    return 'You sent a post request to users endpoint';
  }
}
