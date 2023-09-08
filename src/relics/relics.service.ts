import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { type Repository, DeleteResult, UpdateResult } from "typeorm";
import { type CreateRelicDto, type DeleteRelicDto, type UpdateRelicDto, RelicEntity, RelicRefinementType } from "@relics";
import { AnnouncementEntity } from "@announcements";


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

    async getAnnouncementsByRelic(url_name: string, type: RelicRefinementType): Promise<AnnouncementEntity[]> {
        const relic = await this.relicsRepo.findOne({ where: { url_name, refinement: type }, relations: { annoucements: true } });

        if (!relic) throw new NotFoundException('Relic not found');

        return relic.annoucements
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
