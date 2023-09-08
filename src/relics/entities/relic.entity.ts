import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { RelicRefinementType, RelicType } from "@relics";
import { AnnouncementEntity } from "@announcements";

@Entity({ name: "relics" })
export class RelicEntity {
    @PrimaryGeneratedColumn("increment", { primaryKeyConstraintName: "relic_id" })
    id: number

    @Column({ type: "varchar", name: "name", nullable: false })
    name: string

    @Column({ type: "varchar", name: "url_name", nullable: false })
    url_name: string

    @Column({ type: "enum", enum: RelicType, name: "type", nullable: false })
    type: RelicType

    @Column({ type: "enum", enum: RelicRefinementType, name: "refinement", nullable: false, default: RelicRefinementType.Intact })
    refinement: RelicRefinementType

    @Column({ type: "boolean", name: "vaulted", nullable: false, default: false })
    vaulted: boolean

    @OneToMany(type => AnnouncementEntity, (announcement: AnnouncementEntity) => announcement.id, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: "announcement_id" })
    annoucements: Relation<AnnouncementEntity[]>
}