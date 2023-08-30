import { AnnoucementEntity } from "#src/annoucements/index.js";
import { RelicRefinementType, RelicType } from "#src/relics/index.js";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "relics" })
export class RelicEntity {
    @PrimaryGeneratedColumn("increment", { primaryKeyConstraintName: "relic_id" })
    id: number

    @Column({ type: "varchar", name: "name", nullable: false })
    name: string

    @Column({ type: "varchar", name: "url_name", nullable: false })
    url_name: string

    @Column({ type: "enum", enum: RelicType, name: "type", nullable: false, })
    type: RelicType

    @Column({ type: "enum", enum: RelicRefinementType, name: "refinement", nullable: false, default: RelicRefinementType.Intact })
    refinement: RelicRefinementType

    @Column({ type: "boolean", name: "vaulted", nullable: false, default: false })
    vaulted: boolean

    @OneToMany(type => AnnoucementEntity, (annoucement: AnnoucementEntity) => annoucement, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    annoucements: AnnoucementEntity[]
}