import {userController} from "../controllers/user.controller";
import {FastifyInstance} from "fastify";

export async function userRoutes(app: FastifyInstance) {

    app.post("/users", userController.create)
    app.get("/users", userController.getAll)

}