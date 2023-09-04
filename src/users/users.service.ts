import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity, CreateUserDto, FindUserDto } from '../users/index.js';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) { }

    async create(dto: CreateUserDto): Promise<UserEntity> {
        const user: UserEntity = await this.usersRepository.save(dto)
        return user
    }

    // async update(dto: UpdateUserDto): Promise<UpdateResult> {
    //     const result: UpdateResult = await this.usersRepository.update()
    //     return result;
    // }

    async getOne(dto: FindUserDto): Promise<UserEntity | null> {
        const user: UserEntity | null = await this.usersRepository.findOneBy({ user_id: dto.user_id })
        return user
    }

}
