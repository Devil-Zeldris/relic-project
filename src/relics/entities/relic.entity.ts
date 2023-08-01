import { AnnoucementEntity } from "#src/entities/annoucement.entity";
import { RelicRefinementType, RelicType } from "../types/relic.types";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";

@Entity({ name: "relics" })
export class RelicEntity {
    @PrimaryGeneratedColumn("increment", { primaryKeyConstraintName: "relic_id" })
    public readonly id: number

    @Column({ type: "varchar", name: "name", nullable: false })
    public readonly name: string

    @Column({ type: "enum", enum: RelicType, name: "type", nullable: false })
    public readonly type: RelicType

    @Column({ type: "enum", enum: RelicRefinementType, name: "refinement", nullable: false })
    public readonly refinement: RelicRefinementType

    @OneToMany(type => AnnoucementEntity, annoucement => annoucement.id, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "annoucement_id" })
    annoucements: AnnoucementEntity[]
}