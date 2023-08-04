import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, MaxLength, IsString } from "class-validator";
import { UserEntity } from "../entities/user.entity";

export class CreateUserDto extends PartialType(UserEntity) {
    @IsNotEmpty()
    @IsString()
    @MaxLength(32)

    name: string

    @IsNotEmpty()
    @IsString()

    avatar: string
}