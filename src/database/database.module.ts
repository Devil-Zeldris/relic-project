import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => (
                console.log(config.get<string>("POSTGRES_HOST")),
                {
                    type: 'postgres',
                    host: config.get<string>('POSTGRES_HOST'),
                    port: config.get<number>('POSTGRES_PORT'),
                    username: config.get<string>('POSTGRES_USERNAME'),
                    password: config.get<string>('POSTGRES_PASSWORD'),
                    database: config.get<string>('POSTGRES_DATABASE'),
                    autoLoadEntities: true,
                    synchronize: true,
                })
        })
    ]
})

export class DatabaseModule { }
