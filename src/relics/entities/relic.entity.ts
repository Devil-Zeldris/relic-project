import { RelicRefinementType, RelicType } from "../types/relic.types";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({ name: "relics" })
export class RelicEntity {
    @PrimaryGeneratedColumn("increment", { primaryKeyConstraintName: "relic_id" })
    public readonly id: number

    @Column({ type: "varchar", name: "name", nullable: false })
    public readonly name: string

    @Column({ type: "enum", enum: RelicType, name: "relic_type", nullable: false })
    public readonly type: RelicType

    @Column({ type: "enum", enum: RelicRefinementType, name: "relic_refinement", nullable: false })
    public readonly refinement: RelicRefinementType

    //     @ManyToOne(() => Annoucement, annoucement => annoucement.relic)
    //     public readonly annoucements: Annoucement[]
}