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
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

//http://localhost:3000/users

@Controller('users')
@ApiTags('Users')
export class UsersController {
  //Injecting Users Service
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id?') //'/:id?' - id is optional. If id is not provided, it will return all users
  @ApiOperation({
    summary: 'Fetches all users or a specific user',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the request',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    example: 10,
    description: 'Limit the number of users returned',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    example: 1,
    description: 'The Position of the page to be returned.',
  })
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query() query: any,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, limit, page);
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
