import { Module } from '@nestjs/common';
import { RelicProjectController } from './relics-project.controller';
import { RelicProjectService } from './relics-project.service';
import { RelicsModule } from './relics/relics.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [RelicsModule, UsersModule],
  controllers: [RelicProjectController],
  providers: [RelicProjectService],
})
export class AppModule { }
