import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelicEntity } from './entities/relic.entity';
import { Equal, Repository } from 'typeorm';
import { CreateRelicDto } from './dto/create-relic.dto';
import { UpdateRelicDto } from '#src/relics/dto/update-relic.dto'

@Injectable()
export class RelicsService {
    constructor(@InjectRepository(RelicEntity) private relicRepository: Repository<RelicEntity>) { }

    async create(dto: CreateRelicDto): Promise<RelicEntity> {
        const relic = await this.relicRepository.save(dto)
        return relic;
    }

    async getAll(): Promise<RelicEntity[]> {
        const relics = await this.relicRepository.find()
        return relics;
    }

    async update(dto: UpdateRelicDto): Promise<RelicEntity> {
        const relic = await this.relicRepository.save(dto)
        return relic
    }
}
