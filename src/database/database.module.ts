import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

enum DatabaseType {
    Postgres = 'postgres'
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: DatabaseType.Postgres,
                host: config.getOrThrow<string>('POSTGRES_HOST'),
                port: config.getOrThrow<number>('POSTGRES_PORT'),
                username: config.getOrThrow<string>('POSTGRES_USERNAME'),
                password: config.getOrThrow<string>('POSTGRES_PASSWORD'),
                database: config.getOrThrow<string>('POSTGRES_DB'),
                autoLoadEntities: true,
                synchronize: true,
                logging: true
            })
        })
    ]
})

export class DatabaseModule { }
