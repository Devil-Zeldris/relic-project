import { IsString, MaxLength, IsNotEmpty, IsEnum, IsBoolean } from "class-validator";
import { RelicRefinementType, RelicType } from "../types/relic.types";
import { RelicEntity } from "../entities/relic.entity";

export class CreateRelicDto extends RelicEntity {
    @IsString()
    @MaxLength(14)
    @IsNotEmpty()
    declare name: string;

    @IsString()
    @IsNotEmpty()
    declare url_name: string;

    @IsEnum(RelicType)
    @IsNotEmpty()
    declare type: RelicType;

    @IsEnum(RelicRefinementType)
    @IsNotEmpty()
    declare refinement: RelicRefinementType;

    @IsBoolean()
    @IsNotEmpty()
    declare vaulted: boolean;
}
