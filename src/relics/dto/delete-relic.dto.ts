import { PickType } from "@nestjs/mapped-types";
import { RelicEntity } from "../entities/relic.entity";

export class DeleteRelicDto extends PickType(RelicEntity, ['name', "id"] as const) { }