import { Module } from '@nestjs/common';
import { RelicsController, RelicsService, RelicEntity } from '../relics/index.js'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RelicsController],
  providers: [RelicsService],
  imports: [TypeOrmModule.forFeature([RelicEntity])]
})
export class RelicsModule { }
