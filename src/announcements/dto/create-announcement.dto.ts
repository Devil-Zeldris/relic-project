import { OmitType } from "@nestjs/mapped-types";
import { ArrayMaxSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { UserEntity } from "@users";
import { AnnouncementEntity } from "@announcements";

export class CreateAnnouncementDto extends OmitType(AnnouncementEntity, ["id"] as const) {
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