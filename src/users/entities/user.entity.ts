import { AnnoucementEntity } from "#src/annoucements/entities/annoucement.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
    @PrimaryGeneratedColumn("uuid", { name: "user_uuid" })
    user_uuid: string

    @Column({ type: "varchar", name: "username" })
    username: string

    @Column({ type: "varchar", name: "user_email" })
    user_email: string;

    @Column({ type: "varchar", name: "avatar_url" })
    avatar_url: string;

    @ManyToOne(type => AnnoucementEntity, annoucement => annoucement.user)
    @JoinColumn({ name: "annoucement_id" })
    annoucement: AnnoucementEntity
}