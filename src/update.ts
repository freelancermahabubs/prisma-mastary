import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const updates = async () => {
  // const result =  await prisma.post.update( {
  //     where: {
  //         id: 2
  //     },
  //     data: {
  //         title: "Title4",
  //         content: "content4",
  //         authorName: "mahabub alom"
  //     }
  // })
  // console.log(result)

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Title2",
    },
    data: {
      published: true,
    },
  });
  console.log(updateMany);
};

updates();
