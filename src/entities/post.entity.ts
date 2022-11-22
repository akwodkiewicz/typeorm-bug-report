import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { PostId } from "./post-id";
import { UserId } from "./user-id";
import { User } from "./user.entity";

@Entity()
export class Post {
  @PrimaryColumn({
    type: "text",
    transformer: {
      from(value: string) {
        return new PostId(value);
      },
      to(id: PostId) {
        return id.value;
      },
    },
  })
  id!: PostId;

  @ManyToOne(() => User)
  author?: User;

  @Column({
    type: "text",
    transformer: {
      from(value: string) {
        return new UserId(value);
      },
      to(id: UserId) {
        return id.value;
      },
    },
  })
  authorId!: UserId;
}
