import { Server } from "@hapi/hapi";
import UsersDAO from "./dao/users.dao";
import UsersService from "./module/users/users.service";

const Routes = async (server: Server) => {
  const userService = new UsersService(new UsersDAO());

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
