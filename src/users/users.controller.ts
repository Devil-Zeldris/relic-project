import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService, UserEntity, CreateUserDto, FindUserDto } from '../users/index.js';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('create')
    async create(@Body() userCreate: CreateUserDto): Promise<UserEntity> {
        return this.usersService.create(userCreate)
    }

    @Get(':id')
    async getUser(@Body() id: FindUserDto): Promise<UserEntity | null> {
        return this.usersService.getOne(id)
    }

    // @Put(':id/update')
    // async update(@Body() id: UpdateUserDto): Promise<UpdateResult> {
    //     return this.usersService.update(id)
    // }
}
