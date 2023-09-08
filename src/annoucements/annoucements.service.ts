import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAnnoucementDto, AnnoucementEntity } from "src/annoucements/index.js";
import { RelicEntity } from "src/relics/index.js";

@Injectable()
export class AnnoucementsService {
    constructor(
        @InjectRepository(AnnoucementEntity) private annoucementsRepo: Repository<AnnoucementEntity>,
        @InjectRepository(RelicEntity) private relicsRepo: Repository<RelicEntity>) { }

    async createAnnoucement(url_name: string, dto: CreateAnnoucementDto): Promise<AnnoucementEntity> {

        if (!url_name) throw new NotFoundException("Url name not found");

        const relic = await this.relicsRepo.findOne({ where: { url_name } });

        if (!relic) throw new NotFoundException("Relic not found");

        const annoucement = await this.annoucementsRepo.save(this.annoucementsRepo.create({ ...dto, relic }))

        return annoucement
    }

}