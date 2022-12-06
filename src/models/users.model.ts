import Users from "../schema/users.schema";

export interface IUser {
  firstName: string;
  lastName: string;
  updatedAt: Date;
}

class UsersModel {
  async findFullName(data: any) {
    return data.map((item: IUser) => {
      return { fullName: item.firstName + item.lastName };
    });
  }

  async defaultResponse(data: IUser) {
    return {
      fullName: data.firstName + data.lastName,
      fistName: data.firstName,
      lastName: data.lastName,
      date: data.updatedAt,
    };
  }
}

export default UsersModel;
