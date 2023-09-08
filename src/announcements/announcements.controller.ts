import { Controller, Post, Body, Param, Get } from "@nestjs/common";
import type { AnnouncementsService, CreateAnnouncementDto } from "@announcements";


@Controller('announcements')
export class AnnouncementsController {
    constructor(private annoucementsService: AnnouncementsService) { }

    @Post(':url_name')
    async create(@Param('url_name') url_name: string, @Body() createAnnoucementDto: CreateAnnouncementDto) {
        return this.annoucementsService.createAnnoucement(url_name, createAnnoucementDto)
    }

    @Get(':url_name')
    async getAnnoucementsByRelic(@Param('url_name') url_name: string) {
        // return this.annoucementsService.getAll(url_name)
    }
}