import { Equal } from "typeorm";
import { dataSource } from "./data-source";
import { Post } from "./entities/post.entity";
import { User } from "./entities/user.entity";

const USER_ID = "abcd-1234";
const POST_ID = "first";

async function insertData() {
  const user = dataSource.manager.create(User, {
    id: USER_ID,
    name: "Tom",
  });
  await dataSource.manager.save(user);

  const post = dataSource.manager.create(Post, {
    authorId: USER_ID,
    id: POST_ID,
  });
  await dataSource.manager.save(post);
}

async function retrieveData() {
  const postWithAuthor = await dataSource.manager.find(Post, {
    where: { authorId: Equal(USER_ID) },
    relations: { author: true },
  });
  console.log("\n" + JSON.stringify(postWithAuthor) + "\n");
}

async function main() {
  await dataSource.initialize();
  await insertData();
  await retrieveData();
}

main().catch((e) => console.error(e));
