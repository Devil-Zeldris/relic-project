import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelicEntity } from './entities/relic.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateRelicDto } from './dto/create-relic.dto';
import { UpdateRelicDto } from './dto/update-relic.dto'
import { DeleteRelicDto } from './dto/delete-relic.dto';

@Injectable()
export class RelicsService {
    constructor(@InjectRepository(RelicEntity) private relicRepository: Repository<RelicEntity>) { }

    async create(dto: CreateRelicDto): Promise<RelicEntity> {
        const relic: RelicEntity = await this.relicRepository.save(dto)
        return relic;
    }

    async getAll(): Promise<RelicEntity[]> {
        const relics: RelicEntity[] = await this.relicRepository.find()
        return relics;
    }

    async update(dto: UpdateRelicDto): Promise<UpdateResult> {
        const result: UpdateResult = await this.relicRepository.update({ name: dto.name }, dto)
        return result;
    }

    async delete(dto: DeleteRelicDto): Promise<DeleteResult> {
        const { name, id } = dto;
        const result: DeleteResult = await this.relicRepository.delete({ name } || { id })
        return result;
    }
}
