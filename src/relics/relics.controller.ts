import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateRelicDto } from './dto/create-relic.dto';
import { RelicsService } from './relics.service';
import { UpdateRelicDto } from './dto/update-relic.dto';

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

    @Put('update')
    async updateRelic(@Body() updateRelicDto: UpdateRelicDto) {
        return this.relicsService.update(updateRelicDto)
    }
}
