import { IsNotEmpty, MaxLength, IsString } from "class-validator";

export class UserDto {
    @IsNotEmpty({ message: "Cannot be empty" })
    @IsString({ message: 'The relic must be a string' })
    @MaxLength(32, { message: "Must be less than 32 characters" })

    public readonly name: string

    @IsNotEmpty()
    @IsString()

    public readonly avatar: string
}