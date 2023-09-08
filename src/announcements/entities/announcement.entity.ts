import {
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    type Relation,
} from "typeorm";
import { RelicEntity } from "@relics";

@Entity({ name: "announcements" })
export class AnnouncementEntity {
    @PrimaryGeneratedColumn("increment", { name: "annoucement_id" })
    id: number;

    // @OneToOne(type => UserEntity, user => user.user_id, { onUpdate: "CASCADE", onDelete: "CASCADE" })
    // @JoinColumn({ name: 'host_uuid' })
    // host_uuid: string;

    @ManyToOne(type => RelicEntity, relic => relic.id, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    @JoinColumn({ name: 'relic_id' })
    relic: Relation<RelicEntity>;

    // @OneToMany(type => UserEntity, user => user, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    // squad: UserEntity[];

    @CreateDateColumn({ name: "created_at" })
    created_at: Date;

    @UpdateDateColumn({ name: "updated_at" })
    update_at: Date;
}