import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) { }

    async create(dto: CreateUserDto): Promise<UserEntity> {
        const user: UserEntity = await this.usersRepository.save(dto)
        return user
    }

    async update(dto: UpdateUserDto): Promise<UpdateResult> {
        const result: UpdateResult = await this.usersRepository.update({ username: dto.username } || { user_uuid: dto.user_uuid }, dto)
        return result;
    }

    async getOne(dto: FindUserDto): Promise<UserEntity | null> {
        const user: UserEntity | null = await this.usersRepository.findOneBy({ user_uuid: dto.user_uuid })
        return user
    }

}
