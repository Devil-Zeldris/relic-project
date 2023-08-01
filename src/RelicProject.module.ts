import { Module } from "@nestjs/common";
import { DataSource } from "typeorm";
import { SquadsModule } from './squads/squads.module';
import { UsersModule } from './users/users.module';
import { AnnoucementsModule } from "./annoucements/annoucements.module";
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from "@nestjs/config";
import { RelicsModule } from "./relics/relics.module";

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
export class RelicProjectApp {
  constructor(private dataSource: DataSource) { }
}