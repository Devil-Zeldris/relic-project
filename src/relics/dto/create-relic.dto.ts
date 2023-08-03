import { IsString, MaxLength, IsNotEmpty, IsEnum, IsBoolean } from "class-validator";
import { RelicRefinementType, RelicType } from "../types/relic.types";
import { RelicEntity } from "../entities/relic.entity";
import { PartialType } from "@nestjs/mapped-types";

export class CreateRelicDto extends RelicEntity {

}
// export class CreateRelicDto {
//     @IsString()
//     @MaxLength(14)
//     @IsNotEmpty()
//     name: string;

//     @IsString()
//     @IsNotEmpty()
//     url_name: string;

//     @IsEnum(RelicType)
//     @IsNotEmpty()
//     type: RelicType;

//     @IsEnum(RelicRefinementType)
//     @IsNotEmpty()
//     refinement: RelicRefinementType;

//     @IsBoolean()
//     @IsNotEmpty()
//     vaulted: boolean;
// }
