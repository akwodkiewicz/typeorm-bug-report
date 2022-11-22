import { Column, Entity, PrimaryColumn } from "typeorm";
import { UserId } from "./user-id";

@Entity()
export class User {
  @PrimaryColumn({
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
  id!: UserId;

  @Column()
  name!: string;
}
