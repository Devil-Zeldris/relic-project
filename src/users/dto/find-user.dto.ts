import { PickType } from "@nestjs/mapped-types";
import { UserEntity } from "../entities/user.entity";
import { IsOptional, IsString } from "class-validator";

export class FindUserDto extends PickType(UserEntity, ["user_uuid"] as const) {
    @IsString()
    @IsOptional()
    declare user_uuid: string
}