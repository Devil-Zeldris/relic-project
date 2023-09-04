import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "squads" })
export class SquadEntity {
    @PrimaryGeneratedColumn("increment", { name: "squad_id" })
    public readonly id: number

    // @Column()
    // public readonly users: string[]

    // @ManyToOne(() => Annoucement, annoucement => annoucement.squad)
    // public readonly annoucement: Annoucement
}