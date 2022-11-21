import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Post {
  @PrimaryColumn({
    type: "text",
  })
  id!: string;

  @ManyToOne(() => User)
  author?: User;

  @Column({
    type: "text",
  })
  authorId!: string;
}
