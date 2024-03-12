import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const aggregates = async () => {
  // find average
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // find sum of age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  // find count
  const countAge = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });

  //mag age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  //min age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(countAge);
};
aggregates();
