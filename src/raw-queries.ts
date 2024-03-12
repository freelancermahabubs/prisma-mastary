import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const rawQuery = async () => {
//   const posts = await prisma.$queryRaw`Select * from "posts"`;
//   console.log(posts, "hello");

// delete users table data 

await prisma.$queryRaw`Truncate table "users" cascade `
};

rawQuery();
