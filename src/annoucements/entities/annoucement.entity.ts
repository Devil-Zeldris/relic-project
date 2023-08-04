
import { UserEntity } from "#src/users/entities/user.entity";
import { RelicEntity } from "#src/relics/entities/relic.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "annoucements" })
export class AnnoucementEntity {
    @ManyToOne(type => RelicEntity, relic => relic.annoucements)
    @JoinColumn({ name: 'relic_id' })
    relic: RelicEntity;

    @PrimaryGeneratedColumn("increment", { name: "annoucement_id" })
    id: number

    @OneToOne(type => UserEntity, user => user.annoucement, { onUpdate: "CASCADE" })
    @JoinColumn({ name: "hoster_uuid" })
    hoster: string

    @OneToMany((type) => UserEntity, user => user.annoucement, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "user_uuid" })
    user: UserEntity[]



}