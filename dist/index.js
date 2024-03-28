"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function insertTodo(title, description, done, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title: title,
                description: description,
                done: done,
                userId: userId
            }
        });
        console.log(res);
        return res;
    });
}
// insertTodo("Gym2 ", "hii2", true, 12);
function getTodo(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(res);
    });
}
getTodo(12);
