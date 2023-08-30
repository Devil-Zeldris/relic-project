
import { UserEntity } from "#src/users/entities/user.entity.js"
import { RelicEntity } from "#src/relics/index.js";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "annoucements" })
export class AnnoucementEntity {
    @PrimaryGeneratedColumn("increment", { name: "annoucement_id" })
    id: number;

    @OneToOne(type => UserEntity, user => user, { onUpdate: "CASCADE", onDelete: "CASCADE" })
    host_uuid: string;

    @ManyToOne(type => RelicEntity, relic => relic, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    relic: RelicEntity;

    @OneToMany(type => UserEntity, user => user, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    squad: UserEntity[];

    @CreateDateColumn({ name: "created_at" })
    created_at: Date;

    @UpdateDateColumn({ name: "updated_at" })
    update_at: Date;

    @Column({ name: "expiry_at", type: Date, nullable: false })
    expiry_at: Date;

}