import { Module } from "@nestjs/common";
import { DataSource } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RelicsModule } from './relics/relics.module';
import { SquadsModule } from './squads/squads.module';
import { UsersModule } from './users/users.module';
import { AnnoucementsModule } from "./annoucements/annoucements.module";
import { PostgresConfig } from "./configs";
import { AnnoucementEntity } from "./entities/annoucement.entity";
import { RelicEntity } from "./relics/entities/relic.entity";
import { SquadEntity } from "./entities/squad.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "relics_project",
      entities: [AnnoucementEntity, RelicEntity, SquadEntity],
      synchronize: true
    }),
    RelicsModule,
    SquadsModule,
    UsersModule,
    AnnoucementsModule,
  ],
  providers: [],
})
export class RelicProjectApp {
  constructor(private dataSource: DataSource) { }
}