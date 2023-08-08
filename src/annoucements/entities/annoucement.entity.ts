
import { UserEntity } from "#src/users/entities/user.entity";
import { RelicEntity } from "#src/relics/entities/relic.entity";
import { Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "annoucements" })
export class AnnoucementEntity {
    @PrimaryGeneratedColumn("increment", { name: "annoucement_id" })
    id: number;

    @OneToOne(type => UserEntity, user => user.annoucement, { onUpdate: "CASCADE" })
    host_uuid: string

    @ManyToOne(type => RelicEntity, relic => relic.annoucements)
    relic: RelicEntity;

    @OneToMany(type => UserEntity, user => user.annoucement, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    user: UserEntity[]
}