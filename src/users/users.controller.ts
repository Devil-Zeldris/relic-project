import { Controller, Post, Get, Body, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateResult } from 'typeorm';

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

    @Put(':id/update')
    async update(@Body() id: UpdateUserDto): Promise<UpdateResult> {
        return this.usersService.update(id)
    }
}
