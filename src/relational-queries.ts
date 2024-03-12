import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 3,
      },
    })
    .Post();
  console.log(result);
  // relational filters

  const publishedPostUsers = await prisma.user.findMany({
    include: {
      Post: {
        where:{
          published: true
        }
      },
    },
  });
  console.log(publishedPostUsers, {depth: Infinity});
};

relationalQueries();
