import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn({
    type: "text",
  })
  id!: string;

  @Column()
  name!: string;
}
