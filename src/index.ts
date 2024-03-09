import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "This is Title",
      content: "This is Content..",
      authorName: "Mahabub",
    },
  });
 
};
main();
