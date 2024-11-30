const { Schema, mongoose } = require("mongoose");

const Operation = require("./operation");
const Category = require("./category");
const Account = require("./account");

const UserSchema = new Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    firstname: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.pre("findOneAndDelete", async function (next) {
  const { _id: id } = await this.model.findOne(this.getFilter());
  try {
    await Operation.deleteMany({ user: id });
    await Category.deleteMany({ user: id });
    await Account.deleteMany({ user: id });
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
