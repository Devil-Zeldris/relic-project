import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { CreateRelicDto } from "./create-relic.dto";
import { PickType } from "@nestjs/mapped-types";

export class DeleteRelicDto extends PickType(CreateRelicDto, ['name'] as const) {
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    id?: number
}