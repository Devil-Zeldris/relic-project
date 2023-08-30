import { ArrayMaxSize, IsArray, IsNotEmpty, IsString } from "class-validator";
import { AnnoucementEntity } from "../entities/annoucement.entity.js";
import { OmitType } from "@nestjs/mapped-types";
import { UserEntity } from "#src/users/entities/user.entity.js";

export class CreateAnnoucementDto extends OmitType(AnnoucementEntity, ["id"] as const) {
    @IsNotEmpty()
    @IsString()
    @IsArray()
    declare host_uuid: string;

    @IsNotEmpty()
    @IsArray()
    @ArrayMaxSize(4)
    declare squad: UserEntity[]
}