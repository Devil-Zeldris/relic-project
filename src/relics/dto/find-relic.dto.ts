import { PickType } from "@nestjs/mapped-types";
import { RelicEntity } from "../entities/relic.entity";
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
}