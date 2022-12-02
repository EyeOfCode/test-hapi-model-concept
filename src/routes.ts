import { Server } from "@hapi/hapi";
import UsersModel from "./models/users.model";
import UsersService from "./module/users/users.service";

const Routes = async (server: Server) => {
  const userService = new UsersService(new UsersModel());

  await server.route([
    {
      method: "GET",
      path: "/",
      handler: async () => userService.listFullName(),
    },
    {
      method: "POST",
      path: "/",
      handler: async (req: Request) => userService.create(req),
    },
  ]);
};

export default Routes;
