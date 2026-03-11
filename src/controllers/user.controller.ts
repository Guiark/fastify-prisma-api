import {FastifyReply, FastifyRequest} from "fastify";
import {userService} from "../services/user.service";

async function create(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const user = await userService.create(
        request.body as any
    )

    return reply.status(201).send(user)
}

async function getAll(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const users = await userService.getAll()
    return reply.send(users)
}

export const userController = {
    getAll,
    create
}