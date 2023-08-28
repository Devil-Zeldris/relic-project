import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { CreateAnnoucementDto } from "./dto/create-annoucement.dto";
import { AnnoucementsService } from "./annoucements.service";

@Controller('annoucements')
export class AnnoucementsController {
    constructor(private readonly annoucementsService: AnnoucementsService) { }

    @Post(':relic_url_name/create')
    async create(@Param('relic_url_name') relic_url_name: string, @Body() createAnnoucementDto: CreateAnnoucementDto): Promise<CreateAnnoucementDto> {
        return this.annoucementsService.createAnnoucement(relic_url_name, createAnnoucementDto)
    }
}