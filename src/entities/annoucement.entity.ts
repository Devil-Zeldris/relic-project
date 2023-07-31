
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RelicEntity } from "../relics/entities/relic.entity";
import { SquadEntity } from "./squad.entity";

@Entity({ name: "annoucements" })
export class AnnoucementEntity {
    @PrimaryGeneratedColumn("increment", { name: "annoucement_id" })
    public readonly id: number

    @Column({ name: "hoster_uuid" })
    public readonly hoster: string
    // @ManyToOne(() => Relic, relic => relic.annoucements)

    // public readonly relic: Relic;

    //     @OneToMany(() => Squad, squad => squad.annoucement)

    //     public readonly squad: Squad[]
}