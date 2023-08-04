import { PickType } from "@nestjs/mapped-types";
import { RelicEntity } from "../entities/relic.entity";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class FindRelicDto extends PickType(RelicEntity, ['name', 'id'] as const) {
    @IsNumber()
    @IsOptional()
    declare id: number;

    @IsString()
    @IsOptional()
    declare name: string;
}