import { AnnoucementEntity } from "#src/annoucements/entities/annoucement.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnnoucementsController } from "./annoucements.controller";
import { AnnoucementsService } from "./annoucements.service";

@Module({
    imports: [TypeOrmModule.forFeature([AnnoucementEntity])],
    controllers: [AnnoucementsController],
    providers: [AnnoucementsService]
})
export class AnnoucementsModule { }