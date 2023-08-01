
import { RelicEntity } from "#src/relics/entities/relic.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "annoucements" })
export class AnnoucementEntity {
    @PrimaryGeneratedColumn("increment", { name: "annoucement_id" })
    id: number

    @Column({ name: "hoster_uuid" })
    hoster: string

    @ManyToOne(type => RelicEntity, relic => relic.annoucements)
    @JoinColumn({ name: 'relic_id' })
    relic: RelicEntity
}