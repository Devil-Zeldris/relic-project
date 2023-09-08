import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RelicsService, RelicEntity, RelicsController } from "@relics";

@Module({
  controllers: [RelicsController],
  providers: [RelicsService],
  imports: [TypeOrmModule.forFeature([RelicEntity])]
})
export class RelicsModule { }
