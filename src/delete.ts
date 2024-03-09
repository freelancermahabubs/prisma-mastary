import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const deleteData = async() => {
    // const singleDelete = await prisma.post.delete({
    //     where: {
    //         id: 1
    //     }
    // })

    // const delteMany = await prisma.post.deleteMany({
    //     where: {
    //         published: false
    //     }
    // })

    const upsertData = await prisma.post.upsert({
        where: {
            id: 1
        },
        update: {
            title: "Updated title"
        },
        create: {
            title: "Title 5",
            content: "content 5"
        }
    })
}

deleteData()