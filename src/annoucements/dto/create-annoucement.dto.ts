import { ArrayMaxSize, IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { AnnoucementEntity } from "../entities/annoucement.entity";
import { OmitType } from "@nestjs/mapped-types";
import { UserEntity } from "#src/users/entities/user.entity";

export class CreateAnnoucementDto extends OmitType(AnnoucementEntity, ["id"] as const) {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    @IsArray()
    declare host_uuid: string[]

    @IsNotEmpty()
    @IsArray()
    @ArrayMaxSize(4)
    declare squad: UserEntity[]

    @IsString()
    @IsNotEmpty()
    declare url_name: string
}