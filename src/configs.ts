import { AnnoucementEntity } from "./entities/annoucement.entity";
import { RelicEntity } from "./relics/entities/relic.entity";
import { SquadEntity } from "./entities/squad.entity";
import { DataSourceOptions } from "typeorm";

export enum TypeOrmDatabasesTypes {
    POSTGRES = 'postgres'
}

export const PostgresConfig: DataSourceOptions = {
    type: TypeOrmDatabasesTypes.POSTGRES,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [AnnoucementEntity, RelicEntity, SquadEntity],
}