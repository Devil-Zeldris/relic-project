import { PickType } from "@nestjs/mapped-types";
import { RelicEntity } from "../entities/relic.entity";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateRelicDto extends PickType(RelicEntity, ["name", "id"]) {
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    declare id: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    declare name: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    declare url_name: string;

}