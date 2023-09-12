import { Controller, Get } from '@nestjs/common';
import { RelicProjectService } from './relics-project.service';

@Controller()
export class RelicProjectController {
  constructor(private readonly relicProjectService: RelicProjectService) { }

  @Get()
  getHello(): string {
    return this.relicProjectService.getHello();
  }
}
