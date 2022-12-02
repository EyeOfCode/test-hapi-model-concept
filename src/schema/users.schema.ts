const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UsersSchema = new Schema(
  {
    firstName: String,
    lastName: String,
  },
  { timestamps: true }
);

export default mongoose.model("Users", UsersSchema);
