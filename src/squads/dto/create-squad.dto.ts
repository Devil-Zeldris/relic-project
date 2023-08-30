import { IsArray, IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateSquadDto {
    @IsNotEmpty()
    @IsUUID()
    public readonly host_id: string

    @IsNotEmpty({ message: "This field must not empty" })
    @Length(1, 4, { message: "Must be 1-4 users" })
    @IsArray({ message: "Must be an array" })
    public readonly squad: string[]
}