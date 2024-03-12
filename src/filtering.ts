import {PrismaClient} from "@prisma/client";
import {title} from "process";

const prisma = new PrismaClient();
const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {published: true},
      ],
    },
  });
  console.log("and ", andFiltering);

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {published: true},
      ],
    },
  });
  console.log("or", orFiltering);

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "this",
          },
        },
      ],
    },
  });
  console.log("not", notFiltering);

  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "u", // endsWith, contains, equals
      },
    },
  });
  console.log(startsWith);

  const userNameArray = ["user1", "user2", "user3", "user4"];
  const userNamesByArry = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const indeptData = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      Post: {
        include: {
          PostCategory: {
            include: {
                category: true
            }
          },
        },
      },
    },
  });
  console.dir(indeptData, {depth: Infinity})
};

filtering();
