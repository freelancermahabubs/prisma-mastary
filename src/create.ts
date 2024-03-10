import {PrismaClient, UserRole} from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  // create data into db
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is Title",
  //       content: "This is Content..",
  //       authorName: "Mahabub",
  //     },
  //   });

const createUser = await prisma.user.create({
  data: {
    username: "user3",
    email: "user3@ph.com",
    role: UserRole.user
  }
})
console.log(createUser)
};
main();
