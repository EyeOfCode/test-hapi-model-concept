import UsersModel from "../../models/users.model";

class UsersService {
  constructor(private userModel: UsersModel) {}

  async listFullName() {
    return this.userModel.findFullName();
  }

  async create(data: any) {
    const users = {
      firstName: data.payload.firstName,
      lastName: data.payload.lastName,
    };
    return this.userModel.create(users);
  }
}

export default UsersService;
