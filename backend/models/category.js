const { Schema, mongoose } = require("mongoose");

const Operation = require("./operation");

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

CategorySchema.pre("findOneAndDelete", async function (next) {
  const { _id: id } = await this.model.findOne(this.getFilter());

  try {
    await Operation.deleteMany({ category: id });
    next();
  } catch (error) {
    next(error);
  }
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
