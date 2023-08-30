import { Controller, Post, Body, Param } from "@nestjs/common";
import { CreateAnnoucementDto, AnnoucementsService } from "#src/annoucements/index.js";
import { RelicsService } from "#src/relics/index.js";

@Controller('annoucements')
export class AnnoucementsController {
    constructor(private annoucementsService: AnnoucementsService, private relicsService: RelicsService) { }

    @Post(':url_name/create')
    async create(@Param('url_name') url_name: string, @Body() createAnnoucementDto: CreateAnnoucementDto) {
        const relic = await this.relicsService.getRelicByUrlName(url_name);
        return this.annoucementsService.createAnnoucement(relic, createAnnoucementDto)
    }
}