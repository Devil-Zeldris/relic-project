import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateRelicDto } from './dto/create-relic.dto';
import { RelicsService } from './relics.service';
import { UpdateRelicDto } from './dto/update-relic.dto';
import { DeleteRelicDto } from './dto/delete-relic.dto';
import { AnnoucementEntity } from '#src/annoucements/entities/annoucement.entity';

@Controller('relics')
export class RelicsController {
    constructor(private relicsService: RelicsService) { };

    @Post('create')
    async create(@Body() relicDto: CreateRelicDto) {
        return this.relicsService.create(relicDto);
    }

    @Get()
    async getAll() {
        return this.relicsService.getAll();
    }

    @Get(':url_name/annoucements')
    async getAnnoucementsByRelic(@Param('url_name') url_name: string): Promise<AnnoucementEntity[]> {
        return this.relicsService.getAnnoucementsByRelic(url_name);
    }

    @Put(':url_name/update')
    async updateRelic(@Param('url_name') url_name: string, @Body() updateRelicDto: UpdateRelicDto) {
        return this.relicsService.update(updateRelicDto)
    }

    @Delete(':url_name/delete')
    async deleteRelic(@Param('url_name') url_name: string, @Body() deleteRelicDto: DeleteRelicDto) {
        return this.relicsService.delete(deleteRelicDto)
    }
}
