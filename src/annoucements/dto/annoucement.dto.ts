import { IsNotEmpty, IsArray, Length } from "class-validator";
import { RelicDto } from "src/relics/dto/relic-create.dto";
import { SquadDto } from "src/squads/dto/squad.dto";
import { UserDto } from "src/users/dto/user.dto";

export class AnnoucementDto {
    @IsNotEmpty()
    public readonly relic: RelicDto

    @IsNotEmpty()
    public readonly host: UserDto

    @IsNotEmpty()
    @IsArray()
    @Length(1, 4, { message: "Must be 1-4 users length" })
    public readonly squad: SquadDto[]
}