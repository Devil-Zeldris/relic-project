import { AnnoucementEntity } from "#src/annoucements/entities/annoucement.entity";
import { RelicRefinementType, RelicType } from "../types/relic.types";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";

@Entity({ name: "relics" })
export class RelicEntity {
    @PrimaryGeneratedColumn("increment", { primaryKeyConstraintName: "relic_id" })
    id: number

    @Column({ type: "varchar", name: "name", nullable: false })
    name: string

    @Column({ type: "enum", enum: RelicType, name: "type", nullable: false })
    type: RelicType

    @Column({ type: "enum", enum: RelicRefinementType, name: "refinement", nullable: false })
    refinement: RelicRefinementType

    @Column({ type: "boolean", name: "vaulted", nullable: false })
    vaulted: boolean

    @OneToMany(type => AnnoucementEntity, annoucement => annoucement.id, { onDelete: "CASCADE" })
    @JoinColumn({ name: "annoucement_id" })
    annoucements: number
}