import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAnnoucementDto, AnnoucementEntity } from "#src/annoucements/index.js";
import { RelicEntity } from "#src/relics/index.js";

@Injectable()
export class AnnoucementsService {
    constructor(
        @InjectRepository(AnnoucementEntity)
        private annoucementRepository: Repository<AnnoucementEntity>) { }

    async createAnnoucement(relic: RelicEntity, dto: CreateAnnoucementDto): Promise<AnnoucementEntity> {

        if (!relic) throw new NotFoundException("Relic not found");

        const annoucement = await this.annoucementRepository.save({ relic, dto })

        return annoucement
    }

}