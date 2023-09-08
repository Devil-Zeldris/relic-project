import { PartialType } from "@nestjs/mapped-types";
import { UserEntity } from "../../users/index.js";

export class UpdateUserDto extends PartialType(UserEntity) { }