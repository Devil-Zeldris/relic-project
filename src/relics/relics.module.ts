import { Module } from '@nestjs/common';
import { RelicsController } from './relics.controller';
import { RelicsService } from './relics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelicEntity } from 'src/relics/entities/relic.entity';


@Module({
  controllers: [RelicsController],
  providers: [RelicsService],
  imports: [TypeOrmModule.forFeature([RelicEntity])]
})
export class RelicsModule { }
