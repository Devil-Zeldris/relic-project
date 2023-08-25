import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelicEntity } from './entities/relic.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateRelicDto } from './dto/create-relic.dto';
import { UpdateRelicDto } from './dto/update-relic.dto'
import { DeleteRelicDto } from './dto/delete-relic.dto';
import { FindRelicDto } from './dto/find-relic.dto';

@Injectable()
export class RelicsService {
    constructor(@InjectRepository(RelicEntity) private relicRepository: Repository<RelicEntity>) { }

    async create(dto: CreateRelicDto): Promise<RelicEntity> {
        const relic: RelicEntity = await this.relicRepository.save(dto)
        return relic;
    }

    async getOne(dto: FindRelicDto): Promise<RelicEntity | null> {
        const { name, id } = dto;
        const relic: RelicEntity | null = await this.relicRepository.findOneBy({ name, id })

        if (!relic) throw new NotFoundException("Relic not found");

        return relic;
    }

    async getAll(): Promise<RelicEntity[]> {
        const relics: RelicEntity[] = await this.relicRepository.find()
        return relics;
    }

    async getAnnoucementsByRelic(url_name: string): Promise<any> {
        const annoucements = await this.relicRepository.findOne({ relations: { annoucements: true }, where: { url_name } });
        return annoucements;

    }

    async update(dto: UpdateRelicDto): Promise<UpdateResult> {
        const result: UpdateResult = await this.relicRepository.update({ name: dto.name }, dto)
        return result;
    }

    async delete(dto: DeleteRelicDto): Promise<DeleteResult> {
        const { name, id, url_name } = dto;
        const result: DeleteResult = await this.relicRepository.delete({ name } || { id } || { url_name })
        return result;
    }
}
