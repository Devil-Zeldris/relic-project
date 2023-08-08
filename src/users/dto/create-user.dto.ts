import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, MaxLength, IsString, IsUrl } from "class-validator";
import { UserEntity } from "../entities/user.entity";

export class CreateUserDto extends UserEntity {
    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    name: string

    @IsUrl()
    @IsNotEmpty()
    @IsString()
    avatar: string
}