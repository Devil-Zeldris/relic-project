import { AnnoucementEntity } from "#src/annoucements/entities/annoucement.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([AnnoucementEntity])],
    controllers: [],
    providers: []
})
export class AnnoucementsModule { }