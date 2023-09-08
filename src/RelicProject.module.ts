import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RelicsModule } from "@relics";
import { DatabaseModule } from "@database";
import { SquadsModule } from "@squads";
import { UsersModule } from "@users";
import { AnnoucementsModule } from "@announcements";

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