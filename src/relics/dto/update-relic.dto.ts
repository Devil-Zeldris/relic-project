import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { RelicRefinementType, RelicType } from "../types/relic.types";

export class UpdateRelicDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: string

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    id?: number

    @IsEnum(RelicType)
    @IsNotEmpty()
    @IsOptional()
    type?: RelicType

    @IsEnum(RelicRefinementType)
    @IsNotEmpty()
    @IsOptional()
    refinement?: RelicRefinementType
}