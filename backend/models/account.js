const { Schema, mongoose } = require("mongoose");
const Operation = require("./operation");

const AccountSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

AccountSchema.pre("findOneAndDelete", async function (next) {
  const { _id: id } = await this.model.findOne(this.getFilter());
  try {
    await Operation.deleteMany({ account: id });
    next();
  } catch (error) {
    next(error);
  }
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
