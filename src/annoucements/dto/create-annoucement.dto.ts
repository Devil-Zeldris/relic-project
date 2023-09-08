import { ArrayMaxSize, IsArray, IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";
import { OmitType } from "@nestjs/mapped-types";
import { AnnoucementEntity } from "src/annoucements/index.js";
import { UserEntity } from "src/users/index.js";

export class CreateAnnoucementDto extends OmitType(AnnoucementEntity, ["id"] as const) {
    @IsNotEmpty()
    @IsString()
    @IsArray()
    declare host_id: string;

    @IsNotEmpty()
    @IsArray()
    @ArrayMaxSize(4)
    declare squad: UserEntity[]

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    declare relic_id: number
}