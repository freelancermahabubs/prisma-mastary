import {PrismaClient} from "@prisma/client";

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

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "This is Title1",
        content: "This is Content..1",
        authorName: "Mahabub1",
      },
      {
        title: "This is Title2",
        content: "This is Content..2",
        authorName: "Mahabub2",
      },
      {
        title: "This is Title3",
        content: "This is Content..3",
        authorName: "Mahabub3",
      },
    ],
  });
  console.log(createMany)
};
main();
