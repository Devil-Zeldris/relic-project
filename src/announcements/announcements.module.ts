import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { AnnouncementEntity, AnnouncementsController, AnnouncementsService } from "@announcements";

@Module({
    imports: [TypeOrmModule.forFeature([AnnouncementEntity])],
    controllers: [AnnouncementsController],
    providers: [AnnouncementsService]
})
export class AnnouncementsModule { }