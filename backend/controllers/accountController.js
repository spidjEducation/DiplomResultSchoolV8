const Account = require("../models/account");

const createAccount = async (accountData) => {
  const account = await Account.create(accountData);

  await account.populate("user");

  return account;
};

const getAccount = async (id) => {
  const account = await Account.findById(id);

  if (!account) {
    throw new Error("Account not found");
  }

  await account.populate("user");

  return account;
};

const getAccounts = async (userId) => {
  const accounts = await Account.find({ user: userId }).populate("user");

  return accounts;
};

const updateAccount = async (id, accountData) => {
  const account = await Account.findByIdAndUpdate(id, accountData, {
    returnDocument: "after",
  });

  if (!account) {
    throw new Error("Account not found");
  }

  await account.populate("user");

  return account;
};

const deleteAccount = async (id) => {
  return await Account.findOneAndDelete(id);
};

module.exports = {
  createAccount,
  getAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
};
