import { PickType } from "@nestjs/mapped-types";
import { IsNotEmpty, MaxLength, IsString, IsUrl } from "class-validator";
import { UserEntity } from "../../users/index.js";

export class CreateUserDto extends PickType(UserEntity, ["username", "avatar_url"]) {
    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    declare username: string

    @IsUrl()
    @IsNotEmpty()
    @IsString()
    declare avatar_url: string
}