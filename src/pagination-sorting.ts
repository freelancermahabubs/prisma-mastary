import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const paginationSorting = async () => {
  // offset pagination

//   const offsetData = await prisma.post.findMany({
//     skip: 5,
//     take: 5,
//   });
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
        id: 15
    }
  });

//   sorting 
const sortedData  = await prisma.post.findMany({
    orderBy: {
        id: 'desc'
    },

    where: {
        title: "title1"
    }
})
};

paginationSorting()