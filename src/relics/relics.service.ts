import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelicEntity } from 'src/relics/entities/relic.entity';
import { Repository } from 'typeorm';
import { RelicCreateDto } from './dto/relic-create.dto';

@Injectable()
export class RelicsService {
    constructor(@InjectRepository(RelicEntity) private relicRepository: Repository<RelicEntity>) { }

    async create(dto: RelicCreateDto): Promise<RelicCreateDto> {
        const relic = await this.relicRepository.save(dto)
        return relic;
    }

    async getAll() {
        const relics = await this.relicRepository.find()
        return relics;
    }
}
