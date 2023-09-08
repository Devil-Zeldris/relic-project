import { PickType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { UserEntity } from "@users";

export class FindUserDto extends PickType(UserEntity, ["user_id", "username"] as const) {
    @IsUUID()
    @IsNotEmpty()
    @IsOptional()
    declare user_id: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    declare username: string;
}