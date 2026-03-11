import {prisma} from "../prisma";

async function create(data: {
    login: string,
    firstName:string,
    lastName: string,
}) {
    return prisma.user.create({ data})
}

async function getAll() {
    return prisma.user.findMany()
}

export const userService={
    create,getAll
}