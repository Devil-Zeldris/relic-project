import { IsString, MaxLength, IsNotEmpty, IsEnum } from "class-validator";
import { RelicRefinementType, RelicType } from "../types/relic.types";

export class CreateRelicDto {
    @IsString({ message: 'The relic must be a string' })
    @MaxLength(14, { message: 'The relic name must have less than 14 characters' })
    @IsNotEmpty({ message: 'This field is required' })

    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    url_name: string;

    @IsEnum(RelicType, { message: "Relic type must be one of next types: lith, meso, neo, axi, requiem" })
    @IsNotEmpty({ message: 'This field is required' })

    public readonly type: RelicType

    @IsEnum(RelicRefinementType, { message: "Relic Refinement type must be one of next types: intact, exceptional, flawless, radiant" })
    @IsNotEmpty({ message: 'This field is required' })

    public readonly refinement: RelicRefinementType
}
