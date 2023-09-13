import { Module } from '@nestjs/common';
import { RelicProjectController } from './relics-project.controller';
import { RelicProjectService } from './relics-project.service';
import { RelicsModule } from './relics/relics.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RelicsModule, UsersModule, AuthModule],
  controllers: [RelicProjectController],
  providers: [RelicProjectService],
})
export class AppModule { }
