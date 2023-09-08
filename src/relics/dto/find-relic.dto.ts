import { PickType } from "@nestjs/mapped-types";
import { RelicEntity } from "@relics";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class FindRelicDto extends PickType(RelicEntity, ['name', 'id'] as const) {
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