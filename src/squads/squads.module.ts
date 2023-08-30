import { Module } from '@nestjs/common';
import { SquadsController, SquadsService } from '#src/squads/index.js'

@Module({
  controllers: [SquadsController],
  providers: [SquadsService]
})
export class SquadsModule { }
