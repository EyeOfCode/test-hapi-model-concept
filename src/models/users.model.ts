import Users from "../schema/users.schema";

export interface IUser {
  firstName: string;
  lastName: string;
}

class UsersModel {
  constructor() {}

  async findFullName() {
    const res = await Users.find();
    return res.map((item: IUser) => {
      console.log(item);
      return { fullName: item.firstName + item.lastName };
    });
  }

  async create(data: IUser) {
    return await Users.create(data);
  }
}

export default UsersModel;
