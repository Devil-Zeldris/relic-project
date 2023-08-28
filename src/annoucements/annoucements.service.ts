import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AnnoucementEntity } from "./entities/annoucement.entity";
import { Repository } from "typeorm";
import { CreateAnnoucementDto } from "./dto";
import { RelicsService } from "#src/relics/relics.service";

@Injectable()
export class AnnoucementsService {
    constructor(
        @InjectRepository(AnnoucementEntity)
        private annoucementRepository: Repository<AnnoucementEntity>,
        private relicService: RelicsService) { }

    async createAnnoucement(relic_url_name: string, dto: CreateAnnoucementDto): Promise<AnnoucementEntity> {
        const relic = await this.relicService.getOne(relic_url_name);

        if (!relic) throw new NotFoundException("Relic not found");

        const annoucement = await this.annoucementRepository.save(dto, { data: relic.id });

        return annoucement
    }

}