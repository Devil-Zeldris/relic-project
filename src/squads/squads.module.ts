import { Module } from '@nestjs/common';
import { SquadsController, SquadsService } from '../squads/index.js'

@Module({
  controllers: [SquadsController],
  providers: [SquadsService]
})
export class SquadsModule { }
