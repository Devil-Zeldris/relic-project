import { IsNotEmpty, IsArray, Length, IsString } from "class-validator";
import { SquadDto } from "#src/squads/dto/squad.dto";
import { UserDto } from "#src/users/dto/user.dto";

export class AnnoucementDto {

    @IsNotEmpty()
    @IsString()
    host: string

}