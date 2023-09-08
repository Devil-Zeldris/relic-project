import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SquadsModule } from './squads/index.js';
import { UsersModule } from './users/index.js';
import { AnnoucementsModule } from "./annoucements/index.js";
import { DatabaseModule } from './database/database.module.js';
import { RelicsModule } from "./relics/index.js";

@Module({
  imports: [
    ConfigModule.forRoot(),
    RelicsModule,
    DatabaseModule,
    SquadsModule,
    UsersModule,
    AnnoucementsModule,
    DatabaseModule,
  ],
  providers: [],
})
export class RelicProjectApp { }