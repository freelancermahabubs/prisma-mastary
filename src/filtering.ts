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
};

filtering();
