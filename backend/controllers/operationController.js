const Operation = require("../models/operation");
const Account = require("../models/account");
const Category = require("../models/category");

const CATEGORY_TYPE = { INCOME: 1, EXPENSE: 0 };

const createOperation = async (userId, operationData) => {
  const [account, category] = await Promise.all([
    Account.findById(operationData.account),
    Category.findById(operationData.category),
  ]);

  const newAccountAmount =
    category.type === CATEGORY_TYPE.INCOME
      ? account.amount + operationData.amount
      : account.amount - operationData.amount;

  const isAmountPositive = newAccountAmount >= 0;

  if (isAmountPositive) {
    await Account.findByIdAndUpdate(account.id, { amount: newAccountAmount });
  }

  const operation = await Operation.create({
    ...operationData,
    user: userId,
    status: isAmountPositive,
  });

  await operation.populate([
    { path: "user", select: "login" },
    { path: "account", select: "name" },
    { path: "category", select: "name type" },
  ]);

  return operation;
};

const getOperation = async (id) => {
  const operation = await Operation.findById(id);

  if (!operation) {
    throw new Error("Operation not found");
  }

  await operation.populate([
    { path: "user", select: "login" },
    { path: "account", select: "name" },
    { path: "category", select: "name type" },
  ]);

  return operation;
};

const getOperations = async (search, { limit, page }) => {
  const [items, total] = await Promise.all([
    Operation.find(search)
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .populate([
        { path: "user", select: "login" },
        { path: "account", select: "name" },
        { path: "category", select: "name type" },
      ]),
    Operation.countDocuments(search),
  ]);

  return {
    total,
    page,
    totalPages: Math.ceil(total / limit),
    limit,

    items,
  };
};

// const updateOperation = async (id, operationData) => {
//   const operation = await Operation.findByIdAndUpdate(id, operationData, {
//     returnDocument: "after",
//   });

//   if (!category) {
//     throw new Error("Operation not found");
//   }

//   await operation.populate("user");

//   return operation;
// };

const deleteOperation = async (id) => {
  await Operation.findByIdAndDelete(id);
};

module.exports = {
  createOperation,
  getOperation,
  getOperations,
  // updateOperation,
  deleteOperation,
};
