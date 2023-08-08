import { PickType } from "@nestjs/mapped-types";
import { UserEntity } from "../entities/user.entity";
import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class FindUserDto extends PickType(UserEntity, ["user_uuid", "username"] as const) {
    @IsUUID()
    @IsNotEmpty()
    @IsOptional()
    declare user_uuid: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    declare username: string;
}