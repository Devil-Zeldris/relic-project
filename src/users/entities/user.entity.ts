import { Column, PrimaryGeneratedColumn } from "typeorm";

export class UserEntity {
    @PrimaryGeneratedColumn("uuid", { name: "uuid" })
    readonly uuid: string;

    @Column({ name: "username", type: "varchar", nullable: false })
    readonly username: string;

    @Column({ name: "email", type: "varchar", nullable: false })
    readonly email: string;

    @Column({ name: "password", type: "varchar", nullable: false })
    readonly password: string;

    @Column({ name: "avatar_url", type: "varchar", nullable: false, default: "avatar_default" })
    readonly avatar_url: string;
}
