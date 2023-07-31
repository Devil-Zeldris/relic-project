import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { RelicCreateDto } from './dto/relic-create.dto';
import { RelicsService } from './relics.service';

@Controller('relics')
export class RelicsController {
    constructor(private relicsService: RelicsService) { };

    @Post('create')
    async create(@Body() relicDto: RelicCreateDto) {
        return this.relicsService.create(relicDto);
    }

    @Get()
    async getAll() {
        return this.relicsService.getAll();
    }

    @Put('update')
    async updateRelic() { }
}
