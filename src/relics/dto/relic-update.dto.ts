import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { RelicRefinementType, RelicType } from "../types/relic.types";

export class RelicUpdateDto {
    @IsString()
    @IsNotEmpty()
    name?: string

    @IsNumber()
    @IsNotEmpty()
    id?: number

    @IsEnum(RelicType)
    @IsNotEmpty()
    type: RelicType

    @IsEnum(RelicRefinementType)
    @IsNotEmpty()
    refinement: RelicRefinementType
}