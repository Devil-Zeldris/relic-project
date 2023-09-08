import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import type { Repository } from "typeorm";
import { AnnouncementEntity, CreateAnnouncementDto } from "@announcements";
import { RelicEntity } from "@relics";


@Injectable()
export class AnnouncementsService {
    constructor(
        @InjectRepository(AnnouncementEntity) private annoucementsRepo: Repository<AnnouncementEntity>,
        @InjectRepository(RelicEntity) private relicsRepo: Repository<RelicEntity>) { }

    async createAnnoucement(url_name: string, dto: CreateAnnouncementDto): Promise<AnnouncementEntity> {
        if (!url_name) throw new NotFoundException("Url name not found");

        const relic = await this.relicsRepo.findOne({ where: { url_name }, relations: { annoucements: true } })

        if (!relic) throw new NotFoundException("Relic not found");
        const annoucement = await this.annoucementsRepo.save(this.annoucementsRepo.create({ ...dto, relic }));

        return annoucement;
    }

    async getAll(url_name: string): Promise<AnnouncementEntity[]> {
        const relic = await this.relicsRepo.findOne({ where: { url_name }, relations: { annoucements: true } })
        if (!relic) throw new NotFoundException("Relic not found")
        return relic.annoucements
    }

}