import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import type { Repository } from "typeorm";
import { UserEntity, type CreateUserDto, type FindUserDto } from "@users";


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
