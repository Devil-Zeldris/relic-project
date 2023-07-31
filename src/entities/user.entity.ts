import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    public readonly id: string

    @Column({ name: "nickname" })
    public readonly nickname: string

    @Column({ name: "avatar_url" })
    public readonly avatar_url: string
}