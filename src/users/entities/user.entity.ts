import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AnnoucementEntity } from "@announcements";

@Entity({ name: "users" })
export class UserEntity {
    @PrimaryGeneratedColumn("increment", { name: "id", })
    user_id: number

    @Column({ type: "varchar", name: "username" })
    username: string

    @Column({ type: "varchar", name: "user_email" })
    user_email: string;

    @Column({ type: "varchar", name: "avatar_url" })
    avatar_url: string;

    @ManyToOne(type => AnnoucementEntity, annoucement => annoucement.id)
    @JoinColumn({ name: 'annoucement_id' })
    annoucement: AnnoucementEntity
}