import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
//     const res = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstName,
//             lastName,
//             email
//         }
//     })
// }


// async function readUser() {
//     const user = await prisma.user.findUnique({
//         where: {
//             email: "km",
//         },
//     })
//     // console.log(user);
// }
// readUser();


// async function readUser1() {
//     const user = await prisma.user.findUnique({
//         where: {
//             id: 5,
//         },
//     })
// }
// readUser1();



// async function allUser() {
//     const users = await prisma.user.findMany();
//     // console.log(users);

// }

// allUser();

// async function getUserNameendWith() {
//     const users = await prisma.user.findMany({
//         where: {
//             email: {
//                 endsWith: '@example.com',
//             },
//         },
//     })
//     // console.log(users);
// }
// getUserNameendWith();


// async function getUsers() {
//     const users = await prisma.user.findMany({
//         where: {
//             OR: [
//                 {
//                     firstName: {
//                         startsWith: "J",
//                     },
//                 },
//                 {
//                     AND: {
//                         password: "password1",
//                     },
//                 }
//             ]
//         }
//     })
//     // console.log(users);
// }
// getUsers();


// // update

// // async function updateUser() {
// //     const user = await prisma.user.update({
// //         where: {
// //             email: "k@gmail.com",
// //         },
// //         data: {
// //             firstName: "kunda",
// //             email: "kundan@gmail.com"
// //         },
// //     })
// // }
// // updateUser();



// async function deleteUser() {
//     const user = await prisma.user.delete({
//         where: {
//             id: 1,
//         },
//     })
//     console.log(user)
// }
// deleteUser();




// TODO

async function insertTodo(title: string, description: string, done: boolean, userId: number) {
    const res = await prisma.todo.create({
        data: {
            title: title,
            description: description,
            done: done,
            userId: userId
        }
    });
    console.log(res);
    return res;
}
// insertTodo("Gym2 ", "hii2", true, 12);


async function getTodo(userId: number) {
    const res = await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    })
    console.log(res);
}
getTodo(12);