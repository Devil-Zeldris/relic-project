import { Controller, Post, Body, Param } from "@nestjs/common";
import { CreateAnnoucementDto, AnnoucementsService } from "src/annoucements/index.js";

@Controller('annoucements')
export class AnnoucementsController {
    constructor(private annoucementsService: AnnoucementsService) { }

    @Post(':url_name/create')
    async create(@Param('url_name') url_name: string, @Body() createAnnoucementDto: CreateAnnoucementDto) {
        return this.annoucementsService.createAnnoucement(url_name, createAnnoucementDto)
    }
}