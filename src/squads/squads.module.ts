import { SquadsController, SquadsService } from "@src/squads/index.js";
import { Module } from "@nestjs/common";

@Module({
  controllers: [SquadsController],
  providers: [SquadsService]
})
export class SquadsModule { }
