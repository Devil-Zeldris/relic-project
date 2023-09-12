import { Module } from '@nestjs/common';
import { RelicsService } from './relics.service';
import { RelicsController } from './relics.controller';

@Module({
  controllers: [RelicsController],
  providers: [RelicsService],
})
export class RelicsModule {}
