import { ArrayMaxSize, IsArray, IsNotEmpty, IsString } from "class-validator";
import { AnnoucementEntity } from "../entities/annoucement.entity";
import { OmitType } from "@nestjs/mapped-types";

export class CreateAnnoucementDto extends OmitType(AnnoucementEntity, ["id"] as const) {
    @IsNotEmpty()
    @IsString()
    declare host_uuid: any

    @IsNotEmpty()
    @IsArray()
    @ArrayMaxSize(4)
    declare squad: any[]
}