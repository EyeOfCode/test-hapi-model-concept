import UsersModel from "../models/users.model";
import User from "../schema/users.schema";

class UsersDAO {
  async find() {
    const userModel = new UsersModel();
    const res = await User.find();
    return userModel.findFullName(res);
  }

  async create(data: any) {
    const userModel = new UsersModel();
    const res = await User.create(data);
    return userModel.defaultResponse(res);
  }
}

export default UsersDAO;
