import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnnoucementsController, AnnoucementsService, AnnoucementEntity } from "#src/annoucements/index.js";
import { RelicsService } from '#src/relics/index.js'

@Module({
    imports: [TypeOrmModule.forFeature([AnnoucementEntity])],
    controllers: [AnnoucementsController],
    providers: [AnnoucementsService, RelicsService]
})
export class AnnoucementsModule { }