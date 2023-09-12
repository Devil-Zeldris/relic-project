import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelicsService } from './relics.service';
import { CreateRelicDto } from './dto/create-relic.dto';
import { UpdateRelicDto } from './dto/update-relic.dto';

@Controller('relics')
export class RelicsController {
  constructor(private readonly relicsService: RelicsService) {}

  @Post()
  create(@Body() createRelicDto: CreateRelicDto) {
    return this.relicsService.create(createRelicDto);
  }

  @Get()
  findAll() {
    return this.relicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelicDto: UpdateRelicDto) {
    return this.relicsService.update(+id, updateRelicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relicsService.remove(+id);
  }
}
