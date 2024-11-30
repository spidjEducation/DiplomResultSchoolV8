const { mongoose, Schema } = require("mongoose");

const OperationSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
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

const Operation = mongoose.model("Operation", OperationSchema);

module.exports = Operation;
