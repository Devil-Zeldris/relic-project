import { PartialType } from "@nestjs/mapped-types";
import { UserEntity } from "@users";

export class UpdateUserDto extends PartialType(UserEntity) { }