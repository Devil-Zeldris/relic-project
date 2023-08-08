import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AnnoucementEntity } from "./entities/annoucement.entity";
import { Repository } from "typeorm";
import { CreateAnnoucementDto } from "./dto/create-annoucement.dto";

@Injectable()
export class AnnoucementsService {
    constructor(@InjectRepository(AnnoucementEntity) private annoucementRepository: Repository<AnnoucementEntity>) { }

    async create(dto: CreateAnnoucementDto): Promise<CreateAnnoucementDto> {
        return this.annoucementRepository.save(dto)
    }

    async getAllByRelic() {

    }

    async getOne(dto: Pick<AnnoucementEntity, "id">): Promise<AnnoucementEntity | null> {
        return this.annoucementRepository.findOneBy({ id: dto.id })
    }
}