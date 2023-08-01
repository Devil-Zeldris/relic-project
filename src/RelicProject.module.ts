import { Module } from "@nestjs/common";
import { DataSource } from "typeorm";
import { SquadsModule } from './squads/squads.module';
import { UsersModule } from './users/users.module';
import { AnnoucementsModule } from "./annoucements/annoucements.module";
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
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