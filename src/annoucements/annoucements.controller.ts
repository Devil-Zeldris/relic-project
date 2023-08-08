import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { CreateAnnoucementDto } from "./dto/create-annoucement.dto";
import { AnnoucementsService } from "./annoucements.service";
import { AnnoucementEntity } from "./entities/annoucement.entity";

@Controller('annoucements')
export class AnnoucementsController {
    constructor(private readonly annoucementsService: AnnoucementsService) { }

    @Post('create')
    async create(@Body() createAnnoucementDto: CreateAnnoucementDto): Promise<CreateAnnoucementDto> {
        return this.annoucementsService.create(createAnnoucementDto)
    }

    @Get(':id')
    async getOne(@Param('id') id: Pick<AnnoucementEntity, "id">): Promise<AnnoucementEntity | null> {
        return this.annoucementsService.getOne(id)
    }
}