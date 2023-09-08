import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRelicDto, UpdateRelicDto, DeleteRelicDto, RelicEntity } from '../relics/index.js'

@Injectable()
export class RelicsService {
    constructor(@InjectRepository(RelicEntity) private relicsRepo: Repository<RelicEntity>) { }

    async create(dto: CreateRelicDto): Promise<RelicEntity> {
        const relic: RelicEntity = await this.relicsRepo.save(dto)
        return relic;
    }

    async getRelicByUrlName(url_name: string): Promise<RelicEntity> {
        const relic = await this.relicsRepo.findOne({ where: { url_name } })

        if (!relic) throw new NotFoundException("Relic not found");

        return relic;
    }

    async getAll(): Promise<RelicEntity[]> {
        const relics: RelicEntity[] = await this.relicsRepo.find()
        return relics;
    }

    async getAnnoucementsByRelic(url_name: string): Promise<RelicEntity | null> {
        const annoucements = await this.relicsRepo.findOne({ relations: { annoucements: true }, where: { url_name } });
        return annoucements;

    }

    async update(dto: UpdateRelicDto): Promise<UpdateResult> {
        const result: UpdateResult = await this.relicsRepo.update({ name: dto.name }, dto)
        return result;
    }

    async delete(dto: DeleteRelicDto): Promise<DeleteResult> {
        const { url_name } = dto;
        const result: DeleteResult = await this.relicsRepo.delete({ url_name })
        return result;
    }
}
