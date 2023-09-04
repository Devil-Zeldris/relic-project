import { Module } from '@nestjs/common';
import { UsersController, UserEntity, UsersService } from '../users/index.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
