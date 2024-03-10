import {PrismaClient, UserRole} from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Create data into db

  // Create post
  // const result = await prisma.post.create({
  //   data: {
  //     title: "This is Title",
  //     content: "This is Content..",
  //     authorName: "Mahabub",
  //   },
  // });

  // Create user
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user3",
  //     email: "user3@ph.com",
  //     role: UserRole.user
  //   }
  // });

  // Create profile
  // const createProfile  = await prisma.profile.create({
  //   data: {
  //     bio: "This is Profile Bio",
  //     userId: 7
  //   }
  // });
  // console.log(createProfile);

  // Create category
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Hello"
  //   }
  // });
  // console.log(createCategory);

  // Create post with associated category
  const createPost = await prisma.post.create({
    data: {
      title: "This is Title",
      content: "This is Content of the post",
      authorId: 1,
      PostCategory: {
        create: [{categoryId: 1}, {categoryId: 2}, {categoryId: 3}],
      },
    },
    include: {
      PostCategory: true,
    },
  });
  console.log(createPost);
};

main();
