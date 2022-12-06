import UsersDAO from "../../dao/users.dao";

class UsersService {
  constructor(private userDAO: UsersDAO) {}

  async listFullName() {
    return this.userDAO.find();
  }

  async create(data: any) {
    const users = {
      firstName: data.payload.firstName,
      lastName: data.payload.lastName,
    };
    return this.userDAO.create(users);
  }
}

export default UsersService;
